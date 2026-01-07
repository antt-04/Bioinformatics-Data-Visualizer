# 🏛️ Arquitectura de la Aplicación

Este documento describe cómo se organizan los datos y los componentes dentro del **BioData Visualizer**.

## 🏗️ Estructura de Carpetas (src/)

* `components/`: Componentes UI reutilizables (Botones, Inputs, Cards).
* `features/`: Lógica compleja dividida por funcionalidades (SequenceViewer, Heatmap, Protein3D).
* `hooks/`: Lógica compartida (ej: `useFastaParser`, `useWindowSize`).
* `services/`: Llamadas a APIs externas (ej: RCSB PDB).
* `types/`: Definiciones globales de TypeScript.
* `utils/`: Funciones puras de cálculo (ej: `gcContentCalculator.ts`).

## 📊 Flujo de Datos

El flujo de datos sigue un modelo unidireccional para mantener la predictibilidad:

1.  **Entrada:** El usuario carga un archivo (.fasta, .pdb).
2.  **Procesamiento:** Un `service` o `util` parsea el texto bruto.
3.  **Estado:** Los datos procesados se almacenan en un estado local o global (Context API).
4.  **Representación:** Los componentes visuales (D3/Mol*) reaccionan al cambio de estado y renderizan la información.



## 🧬 Tipado de Datos (TypeScript)

Definición base para secuencias:

```typescript
interface BioSequence {
  id: string;
  header: string;
  rawSequence: string;
  type: 'DNA' | 'RNA' | 'Protein';
  stats: {
    length: number;
    gcContent?: number;
  };
}
