import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {log} from './js/router';


//On récupère la balise title et on y ajoute du texte
const title = document.querySelector('title').textContent = "Romie";

log(200);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

const element = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );
let appNav = document.querySelector('.app-nav');

const root = createRoot(appNav); 
root.render(element);


//Vérification du login et mot de passe 
//const loginBtn = document.getElementById('app-login-btn');

// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément p
// dans lequel on placera le message d'erreur

let error = document.querySelector('.error');

//Ici on récupére les données du formulaire avant de les traiter 
//1.
//const form  = document.getElementsByTagName('form')[0];
//ou :
const form = document.getElementById("login-form");
const inputs = form.elements;
//2.
//var email = document.getElementById('mail');
//ou :
let inputByEmail = inputs["email"];
let inputByPassword = inputs["password"];

inputByEmail.addEventListener("input", function (event) {
    // Chaque fois que l'utilisateur saisit quelque chose
    // on vérifie si un @ est présent dans la chaine
    const regex = /[@]/g; // Renvoie -1 car il n'y a aucun @ dans la chaîne

    if (inputByEmail.value.search(regex) === -1 && inputByEmail.value != "") {

        error.innerText = "Merci de saisir un e-mail valide"; // On réinitialise le contenu
        error.className = "error bg-red-600 rounded-md text-white text-center"; //

    }
    else{
        // S'il y a un message d'erreur affiché et que le champ
        // est valide, on retire l'erreur
        error.innerText = ""; // On réinitialise le contenu
        error.className = "error bg-indigo-600 h-5 rounded-md text-white text-center";
    }
}, false);


form.addEventListener("submit", (event) => {
    //on empêche le comportement par défaut du form
    event.preventDefault();
    // Chaque fois que l'utilisateur tente d'envoyer les données
    // on vérifie que le champ email est valide.
    if (!inputByEmail.validity.valid) {
        // S'il est invalide, on affiche un message d'erreur personnalisé
        error.innerText = "J'attends une adresse e-mail correcte !";
        error.className = "error bg-red-500 rounded-md text-white text-center";
        
    }
	
    else{
        let formData = JSON.stringify({
            'username':inputByEmail.value,
            'password':inputByPassword.value
        })
        
        
        console.log(formData);
    }
    
    

},false);



