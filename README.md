## 🛋️ Muebles Romero - Catálogo Virtual (Resumen Técnico)

**Muebles Romero** es un **Catálogo Virtual de Muebles** implementado como una **Single Page Application (SPA)** usando **React** en el **frontend** y **WordPress headless** como **backend/CMS** autoadministrable.

El frontend consume los datos de los productos vía la **REST API de WordPress**.

-----

### ✨ Funcionalidades Clave

  * **Catálogo Clásico:** Listado de productos con filtros por categoría, fetched de WordPress.
  * **Catálogo Interactivo:** Permite personalizar muebles (ej. variantes de color) usando datos de WP.
  * **Autoadministración:** El cliente maneja productos (Custom Post Types - CPT) y campos personalizados (Advanced Custom Fields - ACF) desde el dashboard de WordPress.
  * **Rendimiento:** Usa **React Router v7 con *loaders*** para *data fetching* pre-renderizado.
  * **UX:** Diseño *responsive* (mobile-first) y optimización de imágenes.

-----

### 🛠️ Tecnologías Usadas

| Categoría | Tecnologías |
| :--- | :--- |
| **Frontend** | **React 18 (TSX)**, **Vite 7**, **Tailwind CSS** + Shadcn UI, React Router v7, TypeScript. |
| **Backend/CMS** | **WordPress headless (REST API)**, **Advanced Custom Fields (ACF)**, Custom Post Type UI. |
| **Herramientas** | TypeScript, ESLint, React Query (caching opcional), Lucide Icons. |

-----

### ⚙️ Requisitos

1.  **Node.js v18+** (para el frontend).
2.  **WordPress local/remoto** (como API): Instalado con MAMP/XAMPP o similar.
3.  **Plugins de WP Necesarios:**
      * **Advanced Custom Fields (ACF)**
      * **API REST de ACF**
      * **Custom Post Type UI (CPT UI)**: Para crear el CPT `productos` y sus campos personalizados.

-----

### 🚀 Instalación y Setup Local para Desarrollo

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clonar el Repositorio:**

    ```bash
    git clone <repo-url>
    cd muebles-romero
    ```

2.  **Instalar Dependencias Frontend:**

    ```bash
    npm install  # o yarn install
    ```

3.  **Configurar el Entorno:**

      * Crea un archivo **`.env`** en la raíz del proyecto.
      * Define la URL base de tu API de WordPress:
        ```bash
        VITE_API_URL=http://localhost:8881/wp-json/wp/v2  # Ajusta el puerto o URL de tu WP local
        ```
      * **Configuración de WordPress:** Asegúrate de que tu instalación de WP local tenga los plugins requeridos, el CPT `productos` creado y los campos ACF necesarios (ej. `price`, `category`, `image`, `variants`).

4.  **Correr en Modo Desarrollo:**

    ```bash
    npm run dev  # El proyecto se abrirá típicamente en http://localhost:3000
    ```

    > **Nota:** Para que los *fetchs* funcionen, tu instancia de WordPress debe estar corriendo. Podría ser necesario **descomentar las llamadas reales a la API** en las rutas si están usando *mocks* temporales.

-----

### 📂 Estructura de Archivos Relevante

| Directorio | Descripción |
| :--- | :--- |
| `src/components/` | Componentes reutilizables (Navbar, ProductGrid, etc.). |
| `src/pages/` | Componentes principales de las páginas (Catálogo, Detalle, etc.). |
| `src/routes/` | **Rutas de la aplicación (`index.tsx`)** y funciones *loader* para *data fetching* con React Router. |
| `src/types/` | **Interfaces TypeScript** (`CleanProduct`, etc.) y *cleaners* para parsear los datos de la API de WP. |
| `public/` | Assets estáticos. |

-----

### 🤝 Contribuciones

Si quieres colaborar con el proyecto:

1.  **Forkea** el repositorio.
2.  Crea una *branch* con tu nueva funcionalidad:
    ```bash
    git checkout -b feature/nombre-de-la-funcionalidad
    ```
3.  Haz *commit* de tus cambios:
    ```bash
    git commit -m "Agrega [Breve descripción de la función]"
    ```
4.  Sube tu *branch*:
    ```bash
    git push origin feature/nombre-de-la-funcionalidad
    ```
5.  Abre un **Pull Request (PR)** a la rama `main`.
    > **Importante:** Sigue las reglas de ESLint y TypeScript para mantener la calidad del código.

-----

### 📝 Licencia

MIT License.

-----
