# Romie - My dog dashboard ;)

### version du 10 fev. 2023

```sh
"name": "romie",
  "version": "1.0.0",
  "description": "My dog dashboard ;)",
```

## Installation

**Node** est recquis ainsi que les packages react et react-dom :

-   https://www.npmjs.com/package/react
-   https://github.com/facebook/react/tree/main/packages/react
-   https://www.npmjs.com/package/react-dom
-   https://github.com/facebook/react/tree/main/packages/react-dom
-   https://reactrouter.com/en/6.8.1/start/overview

`npm install`

## Initialisation et configuration du projet

-   Configuration de [tailwindcss](https://tailwindcss.com/docs/content-configuration)

> Commande tailwindCSS

`npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch`

> Commande prettier

`npm run prettier-watch`

> Commandes VSC

-   rcc→ class component skeleton
-   rrc→ class component skeleton with react-redux connect
-   rrdc→ class component skeleton with react-redux connect and dispatch
    > Serveur node configuré avec [webpack](https://www.gekkode.com/developpement/tutoriel-webpack-5-pour-les-debutants/) et [babel](https://www.gekkode.com/developpement/tutoriel-webpack-5-comment-configurer-babel/)

`npm run dev`

```sh
"scripts": {
    "start": "http-server",
    "dev": "webpack serve --config ./webpack.config.js --mode development",
    "lint": "eslint ."
  },
```

-   Couleurs tailwind css : https://tailwindcss.com/docs/customizing-colors

## Les composants react

-   https://headlessui.com/react/disclosure
-   https://github.com/tailwindlabs/heroicons

## Tests et debugs

-   github react : https://github.com/facebook/react/issues
-   infos : https://eslint.org/

-   npx eslint path/to/the/file

### package.json

````sh
"devDependencies": {
        "@babel/core": "^7.20.12",
        "@babel/preset-env": "^7.20.2",
        "@tailwindcss/forms": "^0.5.3",
        "babel-loader": "^9.1.2",
        "eslint": "^8.34.0",
        "eslint-config-google": "^0.14.0",
        "eslint-plugin-react": "^7.32.2",
        "prettier": "2.8.4",
        "tailwindcss": "^3.2.6",
        "webpack": "^5.75.0",
        "webpack-cli": "^5.0.1",
        "webpack-dev-server": "^4.11.1"
    },
    "dependencies": {
        "@babel/preset-react": "^7.18.6",
        "@headlessui/react": "^1.7.11",
        "@heroicons/react": "^2.0.16",
        "babel-cli": "^6.26.0",
        "http-server": "^14.1.1",
        "onchange": "^7.1.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    }
    ```
````
