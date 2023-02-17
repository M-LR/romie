import React from 'react';
import { createRoot } from 'react-dom/client';

//Composants de l'application
import './js/app';
/////////////////////////////:
import  Navigation  from "./js/components/Navigation";
import { Login } from "./js/pages/Login";
//On récupère la balise title et on y ajoute du texte
const title = document.querySelector('title').textContent = "Romie";


//Affichage du composant de navigation
let appNav = document.querySelector('.app-nav');
const nav = createRoot(appNav); 
nav.render(<Navigation/>);

//Affichage du contenu 
let appContent = document.querySelector('.app-content');
const app = createRoot(appContent);

app.render(<Login/>)





