# AM1 Lacabanne - Artes Multimediales 1 (Cátedra Lacabanne)

Este repositorio contiene la plataforma de documentación, guías de taller y aula virtual para la materia **Artes Multimediales 1 (Cátedra Lacabanne)**, perteneciente al Área Transdepartamental de Artes Multimediales de la **Universidad Nacional de las Artes (UNA)**, Argentina.

El sitio web oficial se encuentra alojado y desplegado de forma estática en [Netlify](https://am1-lacabanne.netlify.app/).

---

## 🎨 Características de la Plataforma

El sitio está estructurado para proporcionar a los estudiantes un recorrido dinámico y responsivo a lo largo de la cursada:
*   **Organización:** Cronograma anual, plan de trabajo con el cronograma detallado de lecturas y audiotextos de la cátedra.
*   **Taller de p5.js:** Material interactivo de programación creativa estructurado en 6 clases progresivas y lecturas misceláneas sobre arte generativo.
*   **Acciones de Consolidación de Saberes (ACSs):** Checkpoints prácticos para afianzar el conocimiento adquirido en cada clase.
*   **Trabajos Prácticos (TPs):** Consignas oficiales y pautas de entrega de las instancias evaluativas obligatorias.
*   **Diseño Moderno:** Tema personalizado basado en Starlight con soporte para modo claro/oscuro adaptado a la estética visual de la cátedra.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre herramientas web modernas y optimizadas para rendimiento y SEO:
*   **[Astro](https://astro.build/) (`^4.3.5`):** Generador de sitios estáticos ultrarrápido.
*   **[Starlight](https://starlight.astro.build/) (`^0.21.2`):** Plugin oficial de Astro para sitios de documentación y guías.
*   **TypeScript (`^5.4.3`):** Para el tipado estático del proyecto en modo estricto.
*   **@astro-community/astro-embed-youtube:** Para la inserción fluida de clases y ejemplos grabados en formato de video.
*   **Sharp:** Optimización y compresión automática de mapas de bits.

---

## 📁 Estructura del Proyecto

```text
.
├── public/                     # Recursos estáticos
│   ├── audios/                 # Audiotextos de la materia
│   └── favicon.svg             # Icono de la pestaña del navegador
├── src/                        # Código fuente
│   ├── assets/                 # Recursos gráficos globales (logos, marcas)
│   ├── components/             # Componentes personalizados de Astro (Lienzo.astro)
│   ├── content/                # Contenidos y documentos MDX
│   │   ├── config.ts           # Configuración de los esquemas de Starlight
│   │   └── docs/               # Páginas y rutas de la documentación
│   │       ├── acs/            # Actividades de consolidación
│   │       ├── bibliografia/   # Bibliografía general
│   │       ├── clases/         # Clases del taller y guías del programador
│   │       ├── organizacion/   # Cronogramas y plan de estudio
│   │       └── tps/            # Consignas de trabajos prácticos
│   └── styles/                 # Hojas de estilo personalizadas (custom.css)
├── astro.config.mjs            # Archivo de configuración de Astro y Starlight
├── package.json                # Scripts y dependencias de npm
└── tsconfig.json               # Configuración del compilador de TypeScript
```

---

## 🚀 Comandos y Desarrollo Local

Para ejecutar o compilar el sitio en tu computadora local, debes tener instalado [Node.js](https://nodejs.org/). Sigue los siguientes pasos:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```
2.  **Iniciar el servidor de desarrollo local:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible para previsualizar en tiempo real en `http://localhost:4321/`.
3.  **Compilar para producción:**
    ```bash
    npm run build
    ```
    Este comando valida los tipos de TypeScript y genera el sitio estático optimizado en la carpeta `./dist/`.
4.  **Previsualizar localmente la compilación de producción:**
    ```bash
    npm run preview
    ```

---

## ⚙️ Reglas de Contribución y Contenido

Si eres desarrollador, docente o colaborador del proyecto, ten en cuenta las siguientes pautas del repositorio (más información en [.antigravity.md](file:///D:/code/am1-lacabanne/.antigravity.md)):

*   **Nomenclatura de archivos:** Todos los nombres de archivos y directorios nuevos creados en `src/content/docs/` deben respetar la regla **kebab-case** (minúsculas, sin mayúsculas, sin espacios, sin acentos ni tildes).
*   **Imágenes locales:** Importa las imágenes localmente en los archivos `.mdx` utilizando el componente `<Image />` de Astro para que el motor optimizador las procese correctamente.
*   **Hojas de Estilo:** Todas las modificaciones del diseño visual de la cátedra se centralizan en [src/styles/custom.css](file:///D:/code/am1-lacabanne/src/styles/custom.css).

---

## 🏛️ Créditos y Licencia

Este sitio es una herramienta oficial de la **Cátedra Lacabanne** para la materia **Artes Multimediales 1**.  
Área Transdepartamental de Artes Multimediales — **Universidad Nacional de las Artes (UNA)**.
