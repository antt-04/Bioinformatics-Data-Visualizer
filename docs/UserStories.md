# Historias de Usuario (User Stories)
Este documento define las funcionalidades del sistema desde la perspectiva del usuario.
---
## 🏁 Sprint 0: Setup & Core Layout
> **Objetivo:** Que el usuario acceda a una plataforma profesional y estructurada.

### US#0.1: Interfaz Profesional
**Como** usuario, **quiero** acceder a una web con un diseño limpio y navegación clara **para** entender rápidamente qué herramientas de análisis tengo disponibles.
* **Criterios de Aceptación:**
    * Navegación funcional entre las secciones de Secuencias, Expresión y 3D.
    * Diseño responsive que se adapte a diferentes tamaños de monitor.
 
  ---

## 🔵 Sprint 1: Análisis de Secuencias (FASTA)
> **Objetivo:** Procesamiento básico de datos genómicos.

### US#1.1: Carga de Archivos FASTA
**Como** investigador, **quiero** cargar archivos `.fasta` locales **para** procesar secuencias de ADN/ARN sin depender de herramientas externas.
* **Criterios de Aceptación:**
    * Soporte para carga mediante "Drag & Drop".
    * Validación de formato (el archivo debe empezar con `>`).

### US#1.2: Métricas de Secuencia
**Como** estudiante, **quiero** ver el porcentaje de GC y la longitud de la secuencia de forma automática **para** analizar la estabilidad de la muestra.
* **Criterios de Aceptación:**
    * Cálculo preciso de %GC (G+C / Total).
    * Visualización de resultados en tarjetas de estadísticas rápidas.

---

## 🟣 Sprint 2: Visualización Interactiva
> **Objetivo:** Exploración visual de la composición del ADN.

### US#2.1: Gráfico de Composición
**Como** usuario, **quiero** ver la distribución de nucleótidos en un gráfico interactivo **para** comparar visualmente la abundancia de cada base.

### US#2.2: Buscador de Motifs
**Como** biotecnólogo, **quiero** buscar patrones específicos (ej. sitios de unión) en la secuencia **para** localizarlos visualmente mediante resaltado.

---

## 🟠 Sprint 3: Expresión Génica (Heatmaps)
> **Objetivo:** Comparación de datasets biológicos complejos.

### US#3.1: Visualización de Microarrays/RNA-seq
**Como** genetista, **quiero** visualizar matrices de expresión en un mapa de calor **para** identificar patrones de regulación génica entre muestras.
* **Criterios de Aceptación:**
    * Interactividad (Hover) para leer valores exactos en el heatmap.
    * Filtros por nombre de gen.

---

## 🔴 Sprint 4: Estructura de Proteínas 3D
> **Objetivo:** Análisis estructural avanzado.

### US#4.1: Visor 3D de Proteínas
**Como** bioquímico, **quiero** visualizar archivos PDB en tres dimensiones **para** estudiar la estructura terciaria de una proteína.
* **Criterios de Aceptación:**
    * Controles de rotación, zoom y desplazamiento.
    * Posibilidad de cambiar entre modelos visuales (Ribbon, Cartoon, Surface).

---

## ✅ Criterios Generales de "Hecho" (DoD)
Para cerrar cualquier historia de usuario:
1. El código debe estar integrado en la rama `develop`.
2. Ha pasado la revisión de la compañera (Code Review).
3. Se ha verificado la funcionalidad con un archivo real de prueba.
