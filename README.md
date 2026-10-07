# SYS FOE — Sitio web

Sitio de **Systems and Solutions FOE** (Tegucigalpa, Honduras): desarrollo de sistemas, ciberseguridad, redes y gobernanza de IA.

Hecho con **Bootstrap 5.3** (CDN), **TypeScript** y **Vite** sobre **Node.js**, con la misma estructura del proyecto de clase (`vite.config.js` MPA, `tsconfig.json`, workflow de GitHub Pages).

## Estructura

| Ruta | Contenido |
| --- | --- |
| `index.html` | Marcado de la página (Bootstrap) |
| `src/style.css` | Estilos propios: variables de marca, logo e ilustraciones |
| `src/main.ts` | Tema claro/oscuro, formulario, menú y botón de volver arriba |
| `public/` | Favicon y video de la animación del logo |
| `.github/workflows/publicar_a_gp.yml` | Compila y publica en GitHub Pages al hacer push a `main` |

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # tsc + vite build -> dist/
npm run preview  # sirve dist/
```

## Contacto

fbarahona280@gmail.com · +504 9480-7460
