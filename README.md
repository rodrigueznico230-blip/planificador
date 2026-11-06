# Modularq · Procesos y cronograma

App web (Vite + React + Tailwind + Supabase) para gestionar el relevamiento diario y cronograma de proyectos de construcción modular:
- **1.1 Estandarización de formatos y flujos (16 formatos normalizados a 1 módulo)**: Tiempos normales $T_n$ ($F_a \approx 0,85$) y Tiempo Estándar $T_e = T_n \times \frac{9}{7}$ con suplemento $K = 2\text{ h}$ de las $9\text{ h}$ laborales ($7\text{ h} = 420\text{ min}$ efectivos por jornada).
- **1.2.1 Avance Físico de Planta % (Operativo) y Matriz de Relevamiento (Unidades dentro de Lotes)**: Ponderación puramente operativa (excluyendo Planos, Acopio y Bases de hormigón), sin avance financiero (`% incidencia`), con matriz interactiva por unidad dentro de cada lote.
- **1.2.2 Control de Abastecimiento (Acopio)**: Seguimiento exclusivo por **Fecha de pedido** (`pedidoDate`) y **Fecha de recepción** (`recepcionDate`).
- **1.4 Variabilidad ($\text{VAR}\%$) y Retrabajos ($D_{ret}$)**: Registro de rango operativo ($T_{\min}, T_{\max}$), cálculo automático de $\text{VAR}\%$ y minutos/motivo de retrabajo por tarea y etapa.

## Desarrollo
    npm install
    npm run dev
