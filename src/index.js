import React from 'react'
import { createRoot } from 'react-dom/client'
//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Composants de l'application
////////////FONCTIONS/////////////////
import './js/utils/globals'
////////////ROUTER/////////////////
import Root from './js/routes/root'
//////////////PAGES///////////////
import ErrorPage from './error-page'
import Home from './js/pages/Home'
import { Login } from './js/pages/Login'
/////////////////////////////
//On récupère la balise title et on y ajoute du texte
const title = (document.querySelector('title').textContent = 'Romie')
//Affichage du composant de navigation
// let appNav = document.querySelector('.app-nav')
// const nav = createRoot(appNav)
// nav.render(<Navigation />)
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/accueil',
                element: <Home />,
            },
        ],
    },
    {
        path: '/connexion',
        element: <Login />,
    },
    {
        path: '/*',
        element: <Home />,
    },
])
//Affichage du contenu
//1 . on récupère la class
let appContent = document.querySelector('.app-content')
//2 . Call createRoot to create a React root for displaying content inside a browser DOM element
const root = createRoot(appContent)
//3 . on injecte
//Call root.render to display a piece of JSX (“React node”) into the React root’s browser DOM node.
//root.render(<App />);
//React will display <App /> in the root, and take over managing the DOM inside it.

root.render(
    //React. StrictMode is a tool that highlights potential issues in a programme. It works by encapsulating a portion of your full application as a component. StrictMode does not render any visible elements in the DOM in development mode, but it enables checks and gives warnings
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
/////////////////////////////
//<TESTS
/////////////////////////////
import Test from './js/components/Test'

const hero1 = new Test('Varg')

console.log(hero1.greet())
/////////////////////////////
//TESTS/>
/////////////////////////////
