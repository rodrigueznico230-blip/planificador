import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: { "import.meta.env.VITE_AI_PROXY": JSON.stringify("/api/claude") },
  build: { target: "es2019", chunkSizeWarningLimit: 2500 },
});
