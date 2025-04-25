| :placard: Vitrine.Dev |  |
| -------------  | --- |
| :sparkles: Nome        | **JS_React_Rolando_Dados**
| :label: Tecnologias | Javascript Typescript React

<h1 align="left">DRAW AND SORT "N" DATA ACCORDING TO THE USER'S CHOICE</h1>
<h1 align="left">DESENHAR E SORTEAR "N" DADOS DE ACORDO COM A ESCOLHA DO USUÁRIO</h1>

![RolandoDados](https://github.com/user-attachments/assets/63d52da3-414d-4cd9-9b54-ee61e0fd0a48)

<h2 align="left">Project Details</h2>
<h2 align="left">Detalhes do projeto</h2>

Simple demonstration of drawing and drawing on the screen a certain number of dice according to the user's choice in an 'Input type="number"'.

Simples demonstração de sorteio e desenho na tela de um determinado número de dados de acordo com a escolha do usuário em um 'Input type="number"'.

I took this project as a basis:

Tomei como base este projeto:

----------------------------------------------
How to design Dice in Html CSS and JavaScript

14 de nov. de 2023

ASP.NET MVC

https://youtu.be/v2kjhrymhKI?si=fwyid_V8_XV1HZ60
----------------------------------------------

----------------------------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
