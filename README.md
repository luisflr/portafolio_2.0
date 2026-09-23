<div align="center">

# Portafolio · Luis Gonzalo Flores Rodríguez

**Ingeniero de Software Senior · Web & Móvil**

Portafolio personal construido desde cero con un enfoque _platform-first_:
priorizando las APIs nativas del navegador sobre dependencias externas,
arquitectura server-first y atención al detalle en accesibilidad y rendimiento.

[🌐 Ver en vivo](https://www.luisgfr.com) · [💼 LinkedIn](https://www.linkedin.com/in/luis-flores-rodriguez/) · [🐙 GitHub](https://github.com/luisflr)

</div>

---

## Sobre el proyecto

No es una plantilla. Es un portafolio diseñado y desarrollado a mano, donde cada
decisión técnica responde a una razón —no a la costumbre de instalar una librería
por defecto—. El contenido dinámico (proyectos y experiencia) proviene de un
backend propio en Django, de modo que agregar un nuevo proyecto no requiere
volver a desplegar el frontend.

La premisa que guio cada elección: **aprovechar la plataforma web nativa antes que
sumar dependencias que mañana quedan sin mantenimiento.** El resultado es un sitio
ligero, accesible y con animaciones fluidas sin librerías de animación.

---

## Stack

| Capa          | Tecnología                                                                            |
| ------------- | ------------------------------------------------------------------------------------- |
| **Framework** | Next.js 16 (App Router) · React 19 con React Compiler                                 |
| **Estilos**   | Tailwind CSS v4 (con tokens semánticos y `@theme inline`)                             |
| **Lenguaje**  | TypeScript                                                                            |
| **Backend**   | Django REST Framework <!-- TODO: enlace o nota del repo del backend si es público --> |
| **Deploy**    | Frontend en Vercel · Backend en Railway                                               |

---

## Decisiones técnicas destacadas

Lo que diferencia este proyecto no es qué usa, sino **qué evita** y por qué:

- **Sistema de temas (dark/light) hand-roll, sin `next-themes`.** Tokens semánticos
  en variables CSS, script anti-FOUC inyectado antes del primer paint, y estado de
  tema leído con `useSyncExternalStore`. Cero dependencias, sin flash al cargar,
  con sincronización entre pestañas.

- **Transición de tema con la View Transitions API nativa.** El cambio de tema se
  revela con un círculo que se expande desde el botón, usando
  `document.startViewTransition` —no una librería—, con degradación elegante en
  navegadores sin soporte.

- **Arquitectura server-first.** El contenido se obtiene en Server Components
  (los datos de Django nunca exponen la URL del backend al cliente); la
  interactividad vive en Client Components acotados. Cada componente paga el costo
  de cliente solo si de verdad lo necesita.

- **Animaciones sin librerías.** Los reveals al hacer scroll usan
  `IntersectionObserver`; las entradas al montar, animaciones CSS escalonadas. Todo
  respeta `prefers-reduced-motion`.

- **Acordeón de experiencia con `<details name>` nativo.** Comportamiento exclusivo
  (una entrada abierta a la vez) sin una sola línea de JavaScript, accesible por
  teclado de fábrica.

- **Accesibilidad como criterio, no como parche.** Navegación por teclado, `aria`
  correcto en componentes interactivos, respeto por `prefers-reduced-motion` y
  contraste verificado en ambos temas.

---

## Características

- 🎨 Tema claro / oscuro con transición animada nativa
- 🖥️ Terminal interactiva dirigida por comandos en la sección "Sobre mí"
- 📂 Sección de proyectos con vista master-detail y archivo completo en mosaico
- 💼 Trayectoria laboral en acordeón, alimentada desde el backend
- ✨ Animaciones de entrada escalonadas, respetando accesibilidad
- 📱 Diseño responsive <!-- TODO: confirmar estado de la versión móvil antes de publicar -->

---

## Ejecutar localmente

```bash
# Clonar
git clone https://github.com/luisflr/<!-- TODO: nombre-del-repo -->.git
cd <!-- TODO: nombre-del-repo -->

# Instalar dependencias
pnpm install

# Variables de entorno (crear .env.local)
# BACKEND_URL=<!-- TODO: URL del backend -->

# Desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Contacto

¿Trabajamos juntos? Estoy abierto a nuevas oportunidades.

- **Web** · [luisgfr.com](https://www.luisgfr.com)
- **LinkedIn** · [luis-flores-rodriguez](https://www.linkedin.com/in/luis-flores-rodriguez/)
- **Email** · luisflr1997@gmail.com

<div align="center">

---

Diseñado y desarrollado por Luis Flores Rodríguez · Arequipa, Perú

</div>
