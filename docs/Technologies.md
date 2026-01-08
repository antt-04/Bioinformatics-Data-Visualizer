# 🛠️ Stack Tecnológico

Este documento detalla las herramientas y librerías seleccionadas para el desarrollo del **BioData Visualizer**, así como la justificación de su uso.

---

### 💻 Core Frontend
* **[React 18](https://reactjs.org/):** Biblioteca principal para la construcción de la interfaz de usuario basada en componentes.
* **[Vite](https://vitejs.dev/):** Herramienta de construcción (build tool) de última generación que ofrece un entorno de desarrollo extremadamente rápido.
* **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que añade tipado estático, vital para manejar estructuras de datos biológicos complejas sin errores.

### 🎨 Estilos y UI
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS basado en utilidades para un diseño rápido, consistente y altamente personalizable.
* **[Lucide React](https://lucide.dev/):** Set de iconos minimalistas para la interfaz científica.

### 📊 Visualización de Datos
* **[D3.js](https://d3js.org/):** Utilizada para manipulaciones de documentos basadas en datos, específicamente para el visualizador de secuencias y gráficos de barras.
* **[Plotly.js](https://plotly.com/javascript/):** Librería robusta para la creación del Heatmap interactivo en la sección de expresión génica.
* **[Mol* (MolStar)](https://molstar.org/):** Toolkit de código abierto para la visualización 3D de macromoléculas (archivos PDB).

### ⚙️ Procesamiento de Datos (Bio-Logic)
* **File API:** Para la lectura de archivos locales (`.fasta`, `.pdb`) directamente en el navegador del usuario, garantizando privacidad y rapidez.
* **Papa Parse:** (Opcional) Para el parseo eficiente de grandes archivos CSV/TSV de expresión génica.

---

### 🔧 Herramientas de Desarrollo
* **ESLint & Prettier:** Para mantener un estándar de código limpio y profesional.
* **Git & GitHub:** Control de versiones y gestión de proyectos mediante Issues y Projects.
* **Vercel / Netlify:** (Propuesto) Para el despliegue continuo (CI/CD) de la aplicación.

---

### 🔬 Justificación del Stack
La elección de **Vite + TS** responde a la necesidad de manejar grandes volúmenes de datos (secuencias genómicas) con el máximo rendimiento. **Tailwind CSS** nos permite iterar la UI científica rápidamente, mientras que la combinación de **D3** y **Mol*** cubre todo el espectro de visualización, desde 2D hasta 3D atómico.
