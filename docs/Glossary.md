# 📖 Glosario Bioinformático

Este documento define los términos biológicos y técnicos fundamentales del **BioData Visualizer**. Su objetivo es unificar el lenguaje entre el desarrollo de software y la ciencia biológica.

---

### 🧬 Genómica y Secuencias (Sprints 1 y 2)

* **FASTA:** Formato de texto estándar para representar secuencias de ácidos nucleicos (ADN/ARN) o proteínas. Cada registro comienza con una línea de encabezado (">") seguida de la secuencia.
* **Nucleótido:** Unidades básicas del ADN (Adenina, Citosina, Guanina, Timina). En el código se suelen representar como caracteres (A, C, G, T).
* **Contenido GC (%GC):** Porcentaje de bases de Guanina y Citosina en una secuencia. Es un indicador clave de la estabilidad térmica del ADN debido a sus tres enlaces de hidrógeno.
* **Motif (Motivo):** Una secuencia corta y conservada que suele tener una función biológica específica (ej: sitios de unión de factores de transcripción).

### 📊 Expresión Génica (Sprint 3)

* **RNA-seq:** Tecnología de secuenciación que mide la cantidad de ARN en una muestra, indicando qué genes están activos en un momento dado.
* **Heatmap (Mapa de Calor):** Representación visual de datos donde los niveles de expresión de los genes se codifican con colores (ej: rojo para alta expresión, azul para baja).
* **Normalización:** Proceso estadístico para corregir sesgos en los datos de expresión y poder comparar diferentes muestras entre sí.
* **Fold-Change:** Medida que indica cuánto cambia una cantidad entre una muestra control y una experimental.

### 🧊 Biología Estructural 3D (Sprint 4)

* **PDB (Protein Data Bank):** Formato de archivo que contiene las coordenadas espaciales (X, Y, Z) de cada átomo en una macromolécula, permitiendo su renderizado tridimensional.
* **Residuo:** Nombre técnico de un aminoácido individual cuando forma parte de una cadena de proteína.
* **Visualización Cartoon:** Estilo de renderizado 3D que simplifica la proteína en cintas, hélices y flechas para facilitar la interpretación de la estructura secundaria.

---

### ⚙️ Procesamiento de Datos y Visualización (Technical-Bio)

* **Parser:** Algoritmo que lee un archivo de texto bruto (como el FASTA) y lo transforma en una estructura de datos (JSON/Objeto) que React pueda entender.
* **Viewport (Visor):** En el contexto de estructuras 3D, es el área del canvas donde se renderiza la proteína.
* **Big Data Biológico:** Se refiere al reto de manejar archivos de secuencias que pueden contener millones de caracteres. En nuestro proyecto, optimizaremos el renderizado para no bloquear el navegador.
* **Color Schemes (Bio-UI):** * **ClustalX:** Sistema de colores estándar para nucleótidos (A=Naranja, C=Azul, G=Naranja, T=Rojo).
    * **Hydrophobicity:** Escala de colores para proteínas basada en su afinidad con el agua.

---

### 🧪 Formatos de Archivo Soportados

* **.fasta / .fa**: Secuencias de nucleótidos o aminoácidos.
* **.csv / .tsv**: Matrices de expresión génica (datos tabulares).
* **.pdb**: Coordenadas de estructura atómica 3D para proteínas.

---

### 💻 Correspondencia Técnica para Desarrolladoras

Para mantener el código limpio, utilizaremos estos términos en nuestras variables de TypeScript:
- `sequence`: Cadenas de ADN/ARN.
- `gcContent`: Porcentaje de GC calculado.
- `abundance`: Valores de expresión génica.
- `coordinates`: Datos de estructuras atómicas 3D.
