import React from 'react';
import { createRoot } from 'react-dom/client';

//Composants de l'application
import './js/utils/globals';
/////////////////////////////
import  App  from './js/App';
/////////////////////////////
import  Navigation  from "./js/components/Navigation";
/////////////////////////////
//On récupère la balise title et on y ajoute du texte
const title = document.querySelector('title').textContent = "Romie";
//Affichage du composant de navigation
let appNav = document.querySelector('.app-nav');
const nav = createRoot(appNav); 
nav.render(<Navigation/>);
//Affichage du contenu 
//1 . on récupère la class 
let appContent = document.querySelector('.app-content');
//2 . Call createRoot to create a React root for displaying content inside a browser DOM element
const root = createRoot(appContent);
//3 . on injecte 
//Call root.render to display a piece of JSX (“React node”) into the React root’s browser DOM node.
//root.render(<App />);
//React will display <App /> in the root, and take over managing the DOM inside it.
root.render(<App/>)





