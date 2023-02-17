
# Romie - My dog dashboard ;)
### version du 10 fev. 2023 
```sh
"name": "romie",
  "version": "1.0.0",
  "description": "My dog dashboard ;)",
  ```
## Installation

 **Node** est recquis ainsi que les packages react et react-dom :
 - https://www.npmjs.com/package/react
 - https://github.com/facebook/react/tree/main/packages/react
 - https://www.npmjs.com/package/react-dom
 - https://github.com/facebook/react/tree/main/packages/react-dom

`npm install`

## Initialisation 
- Configuration de [tailwindcss](https://tailwindcss.com/docs/content-configuration)

> Commande tailwindCSS

`npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch`

> Serveur node configuré avec [webpack](https://www.gekkode.com/developpement/tutoriel-webpack-5-pour-les-debutants/) et [babel](https://www.gekkode.com/developpement/tutoriel-webpack-5-comment-configurer-babel/)

`npm run dev`
```sh
"scripts": {
    "start": "http-server",
    "dev": "webpack serve --config ./webpack.config.js --mode development",
    "lint": "eslint ."
  },
```
## Tests et debugs
* github react  : https://github.com/facebook/react/issues
* infos : https://eslint.org/

