# Practica TypeScript Simpsons

Proyecto de práctica con **TypeScript** que consume una API de *The Simpsons* para mostrar personajes (u otra información relacionada), usando fetch, tipado fuerte y buenas prácticas.

---

## 🧩 Estructura del proyecto

practicaTypescriptSimpsons/


├── src/ # Código fuente en TypeScript

│ ├── main.ts # Punto de entrada / lógica principal

│ └── style.css # Estilo principal de la pagina

│
├── dist/ # Código compilado a JavaScript listo para producción / distribución

├── node_modules/

├── index.html # Página principal para visualizar la app

├── package.json

├── package-lock.json

├── tsconfig.json # Configuración de TypeScript

└── README.md

---

## 🚀 Tecnologías usadas

- **TypeScript** — tipado estático, interfaces, genéricos
- **Fetch API / HTTP** — para consumir endpoints de la API external
- **HTML + CSS** — para la presentación visual

---

## 🛠️ Instalación y puesta en marcha

1. Cloná este repositorio  

   - git clone https://github.com/NogFait18practicaTypescriptSimpsons.git


   - cd practicaTypescriptSimpsons

2. Instalá las dependencias

### bash

- npm install
Compilá TypeScript (a JS)


- npm run watch
compila automáticamente tu código TypeScript cada vez que haces un cambio.
Abrí index.html en el navegador

Podés simplemente abrir el archivo localmente

O usar un servidor de desarrollo si lo preferís (por ejemplo npx serve)


## 🔍 Funcionalidades (objetivos)
- Hacer peticiones HTTP a una API de The Simpsons (por ejemplo GET de personajes)

- Parsear la respuesta JSON con tipos TS bien definidos

- Mostrar los personajes en la UI (por ejemplo con tarjetas, imágenes, nombre, etc.)

- Manejar estados de carga / errores

- Buenas prácticas de separación de responsabilidades (API / UI / modelos)


## 📚 Recursos y referencias
- Documentación oficial de TypeScript

- API pública de The Simpsons (o la que estés usando)

