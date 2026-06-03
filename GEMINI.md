# Contexto del Proyecto - AM1 Lacabanne

Este archivo proporciona una visión general y contextual para asistentes de IA (como Gemini) y desarrolladores que trabajen en este repositorio.

## 📝 Descripción general

El proyecto **AM1 Lacabanne** es la plataforma de documentación y aula virtual para la materia **Artes Multimediales 1 (Cátedra Lacabanne)**, perteneciente al Área Transdepartamental de Artes Multimediales de la **Universidad Nacional de las Artes (UNA)**, Argentina.

La plataforma sirve para guiar a los estudiantes a través de las clases teóricas de la materia, el taller de programación creativa en **p5.js**, las actividades de consolidación y las consignas de los trabajos prácticos.

Está construido sobre [Astro](https://astro.build/) y utiliza la integración [Starlight](https://starlight.astro.build/) para gestionar la documentación y la navegación. El sitio de producción se encuentra alojado en [Netlify](https://am1-lacabanne.netlify.app/).

---

## 🛠️ Tecnologías y dependencias principales

El proyecto se basa en las siguientes tecnologías principales (definidas en [package.json](file:///am1-lacabanne/package.json)):

*   **Astro (`^4.3.5`)**: Framework web para la generación de sitios estáticos veloces y orientados al contenido.
*   **Starlight (`^0.21.2`)**: Kit de herramientas oficial de Astro para construir sitios de documentación.
*   **TypeScript (`^5.4.3`)**: Configurado con un perfil estricto extendiendo `astro/tsconfigs/strict`.
*   **@astro-community/astro-embed-youtube (`^0.5.1`)**: Componente MDX para integrar videos de YouTube (clases grabadas, ejemplos).
*   **Sharp (`^0.32.5`)**: Para el procesamiento y optimización de imágenes estáticas.

---

## 📁 Estructura del repositorio

A continuación se detalla la estructura principal del proyecto:

```text
.
├── public/                     # Archivos estáticos servidos directamente
│   ├── audios/                 # Audios para audiotextos de la cátedra
│   └── favicon.svg             # Favicon del sitio
├── src/                        # Código fuente de la aplicación
│   ├── assets/                 # Recursos gráficos globales (logos de la UNA, etc.)
│   ├── components/             # Componentes de Astro personalizados
│   │   └── Lienzo.astro        # Componente para sketches de p5.js (en desarrollo)
│   ├── content/                # Contenidos estructurados
│   │   ├── config.ts           # Configuración de esquemas de colecciones de Astro
│   │   └── docs/               # Documentos markdown/MDX (rutas del sitio)
│   │       ├── acs/            # Actividades de Consolidación de Saberes (ACSs)
│   │       ├── bibliografia/   # Bibliografía general
│   │       ├── clases/         # Clases teóricas/prácticas del taller de p5.js
│   │       ├── organizacion/   # Plan de trabajo, cronogramas y audiotextos
│   │       └── tps/            # Consignas de Trabajos Prácticos (TPs)
│   └── styles/                 # Estilos CSS personalizados
│       └── custom.css          # Estilos globales y personalización de temas (claro/oscuro)
├── astro.config.mjs            # Configuración de Astro y plugin de Starlight
├── package.json                # Dependencias, scripts y metadatos
├── tsconfig.json               # Configuración del compilador de TypeScript
└── README.md                   # Instrucciones iniciales del proyecto
```

---

## ⚙️ Configuración del sitio (`astro.config.mjs`)

La configuración principal del proyecto está definida en [astro.config.mjs](file:///am1-lacabanne/astro.config.mjs) e incluye:

1.  **URL de Producción**: Apunta a `https://am1-lacabanne.netlify.app/`.
2.  **Identidad Visual**: Logos light/dark apuntando a `una-m-light.svg` y `una-m-dark.svg` en `src/assets/`.
3.  **Estilos Personalizados**: Carga el archivo `./src/styles/custom.css`.
4.  **Barra Lateral (Sidebar)**: Estructurada de forma manual y autogenerada por directorios:
    *   **Organización** (directorio `organizacion`)
    *   **Taller p5.js** (sub-items estructurados por clases de la 1 a la 6 + carpeta `misc`)
    *   **Acciones de Consolidación de Saberes (ACSs)** (directorio `acs`)
    *   **Trabajos Prácticos (TPs)** (directorio `tps`)
    *   **Bibliografía** (directorio `bibliografia`)

---

## 🎨 Estilos y temas (`custom.css`)

El archivo [custom.css](file:///am1-lacabanne/src/styles/custom.css) define:

*   **Colores de la Cátedra**: Configura las variables del tema de Starlight (`--sl-color-*`) para el modo claro y modo oscuro, manteniendo una estética azulada-verdosa (tonos HSL oscuros en tema oscuro y claros en tema claro).
*   **Visualización de Sketches**: Fuerza a todos los elementos `iframe` a ocupar el `100%` del ancho del contenedor y una altura fija de `810px` para asegurar la correcta visualización de los sketches embebidos desde el editor de p5.js.

---

## 📝 Organización y formato del contenido

### 1. Ubicación de archivos de contenido
Todos los archivos de contenido deben situarse dentro de [src/content/docs/](file:///am1-lacabanne/src/content/docs/). Starlight asocia de forma automática las rutas de acceso con los archivos MD/MDX allí creados.

### 2. Recursos y multimedia locales
Cuando una clase o documento utiliza imágenes locales, estas se guardan en el mismo directorio del archivo `.mdx` correspondiente (por ejemplo, en [src/content/docs/clases/clase-1/](file:///am1-lacabanne/src/content/docs/clases/clase-1/)). Se importan en MDX usando:
```mdx
import img1 from './ui.jpg';
import { Image } from 'astro:assets';

<Image src={img1} alt="Texto descriptivo" width="700"/>
```

### 3. Integración de videos
Para los videos explicativos, se utiliza el componente `<YouTube />` importado de `@astro-community/astro-embed-youtube`:
```mdx
import { YouTube } from '@astro-community/astro-embed-youtube';

<YouTube id="https://youtu.be/1PFSn4DUYFg" params="start=0&end=436"/>
```

---

## 📚 Estructura de contenido del Plan de Trabajo

### **Clases del Taller de p5.js** (`src/content/docs/clases/`)
*   **Clase 1**: Concepto de programación creativa, configuración del editor local y web de p5.js, sistema de coordenadas 2D, primitivas geométricas (`point`, `line`, `rect`, `ellipse`, `triangle`, `quad`, `bezier`), orden de apilamiento y atributos de contorno (`strokeWeight`, `strokeCap`, `strokeJoin`).
*   **Clase 2**: Lógica de programación, tipos de datos, variables locales/globales, condicionales (`if`/`else`) y entrada de usuario (`mouseX`, `mouseY`, eventos básicos).
*   **Clase 3**: Transformaciones en el espacio 2D (`translate`, `rotate`, `scale`), estructuras de control de flujo repetitivo (`for`, `while`) y lógica para simular movimientos físicos básicos.
*   **Clase 4**: Definición y alcance de funciones personalizadas por el usuario, eventos disparados (`keyPressed`, `mousePressed`), manipulación y formateo de texto, y carga/renderizado de imágenes externas.
*   **Clase 5**: Estructuras de datos (arreglos/arrays), carga de archivos sonoros, modulación y manipulación de audio, captura y procesamiento de streams de video en tiempo real.
*   **Clase 6**: Modelado 3D mediante el motor WebGL en p5.js, exportación y publicación web de sketches, uso básico de librerías complementarias e introducción a modelos de Machine Learning interactivos (ml5.js).
*   **Material misceláneo**:
    *   *Hacia una estética del arte generativo* (`clases/misc/estetica-gen-art.mdx`): Ensayo conceptual e histórico sobre el arte computacional y generativo.
    *   *Herramientas* (`clases/misc/herramientas.mdx`): Guía introductoria para el uso de VS Code, Git, Bash y GitHub en el desarrollo local.
    *   *Guía de montaje de TPs* (`clases/misc/guia-montaje-tp1.mdx`): Guía paso a paso para estructurar, nombrar y subir los archivos del TP Nº1 a la galería `<la-piscine>`.

### **Acciones de Consolidación de Saberes** (`src/content/docs/acs/`)
Se componen de 6 actividades prácticas secuenciales (ACS-1 a ACS-6) que sirven de checkpoints para consolidar los conocimientos adquiridos en cada una de las clases del taller.

### **Trabajos Prácticos (TPs)** (`src/content/docs/tps/`)
*   **TP1**: Creación de una imagen generativa (estática o dinámica) aplicando primitivas, curvas y transformaciones 2D. Restricciones: lienzo de 512x512px, solo escala de grises de 8 bits, sin renderizado 3D ni mapas de bits. Se acompaña de un ensayo escrito vinculando la obra con autores del plan de trabajo (por ejemplo, Paul Valéry, José Luis Brea) y pioneros del arte algorítmico (Vera Molnár, Georg Nees, Charles Csuri).
*   **TP2**: Consigna avanzada que complementa la parte práctica e integra hardware (Arduino) o interfaces interactivas para una Obra Multimedia Final.

---

## 🚀 Comandos útiles

Ejecuta estos comandos en la raíz del proyecto para tareas de desarrollo o compilación:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala los paquetes y dependencias del proyecto. |
| `npm run dev` o `npm run start` | Arranca el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Valida el tipado de TypeScript y compila el sitio para producción en `./dist/`. |
| `npm run preview` | Previsualiza localmente el sitio compilado en `./dist/`. |
| `npm run astro ...` | Ejecuta comandos de la interfaz CLI de Astro de forma directa. |
