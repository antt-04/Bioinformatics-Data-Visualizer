# ⚙️ Metodología de Trabajo (Git Flow)

Utilizamos una estrategia de ramificación para mantener la estabilidad del proyecto.

### 🌳 Estructura de Ramas
* **`main`**: Rama protegida. Solo contiene versiones estables y probadas.
* **`develop`**: Rama principal de integración. Todo el desarrollo pasa por aquí.
* **`feature/[nombre]`**: Ramas temporales para tareas específicas (ej: `feature/fasta-parser`).

### 🔄 Ciclo de Colaboración
1.  **Sincronizar:** Siempre hacer `git pull origin develop` antes de empezar.
2.  **Ramas:** Crear una rama desde `develop` para cada tarea.
3.  **Pull Requests (PR):** Al terminar, abrir un PR hacia `develop`.
4.  **Revisión:** La otra compañera debe revisar y aprobar el código antes del Merge.

### 💬 Convención de Commits
Usaremos prefijos para identificar el tipo de cambio:
- `feat:` Nueva funcionalidad.
- `fix:` Corrección de errores.
- `docs:` Cambios en documentación.
- `style:` Formateo o estilos (CSS).
