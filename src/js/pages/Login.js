import React from 'react';
import { useState } from "react";


export const Login = () => {
    //Gestion des erreurs via le state local
    const [errorMsg, setErrorMsg] = useState('');
    const [classError, setClassError] = useState('bg-indigo-600 h-5 rounded-md text-white text-center')


    //*************************** */
    //Vérification du formulaire
    //*************************** */
    function handleSubmit(event) {

        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
        //on empêche le comportement par défaut du form
        event.preventDefault();
        //On récupére les données du formulaire avant de les traiter 
        //var email = document.getElementById('mail');
        //ou :
        let emailInput = event.target['email'].value;
        let passwordInput = event.target['password'].value;

        if (passwordInput.length < 8 ) {
            setClassError('bg-red-500 rounded-md text-white text-center');
            setErrorMsg("Votre mot de passe contient au moins 8 caractères !")
        }
        if ( emailInput.search(regex) === -1) {
            setClassError('bg-red-500 rounded-md text-white text-center');
            setErrorMsg("J'attends une adresse e-mail correcte !")
        }
        
    }
    //*************************** */
    //Vérification si mail valide
    //*************************** */
    function handleChange(event) {

        let input =  event.target.value;
        // Chaque fois que l'utilisateur saisit quelque chose
        // on vérifie si un @ est présent dans la chaine
        const regex = /[@]/g; // Renvoie -1 car il n'y a aucun @ dans la chaîne
        if (input.search(regex) === -1 && input != "") {

            setClassError('bg-red-500 rounded-md text-white text-center');
            setErrorMsg("Merci de saisir un e-mail valide");
    
        }
        else{
            // S'il y a un message d'erreur affiché et que le champ
            // est valide, on retire l'erreur
            setClassError('bg-indigo-600 h-5 rounded-md text-white text-center');
            setErrorMsg("");
        }
    }
    

    
    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                <img className="mx-auto w-auto inline-block rounded-full ring-2 ring-white" src="./img/undraw_dog_c7i6.svg" alt="Your Company"/>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-300">Au panier Romie</h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-slate-300">
                Pas encore de panier ?
                    <a href="#" className="font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-500"> créez en un ;)</a>
                </p>
                </div>
                <p className={classError} >
                {errorMsg}
                </p>
                <form className="mt-1 space-y-6" action="#" method="POST" id="login-form" noValidate onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                        <label htmlFor="email-address" className="sr-only">E-mail</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="E-mail"  onChange={handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">Mot de passe</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Mot de passe"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-slate-300">Rester connecté·e</label>
                        </div>

                        <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">J'ai oublié mon mot de passe</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" id="app-login-btn" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Allez, on rentre !
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

