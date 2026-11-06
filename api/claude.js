// Proxy de IA para el despliegue: la clave de Anthropic se configura en Vercel (ANTHROPIC_API_KEY), nunca en el navegador.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: { message: "Método no permitido" } });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(503).json({ error: { message: "La IA no está configurada: falta ANTHROPIC_API_KEY en el proyecto de Vercel." } });
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const messages = Array.isArray(body.messages) ? body.messages.slice(0, 4) : [];
  if (!messages.length || JSON.stringify(messages).length > 120000) return res.status(400).json({ error: { message: "Solicitud inválida" } });
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6", max_tokens: Math.min(Number(body.max_tokens) || 2000, 8000), messages }),
    });
    const data = await r.json();
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(502).json({ error: { message: "No se pudo contactar al servicio de IA." } });
  }
}
