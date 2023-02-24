import React from 'react'
import { createRoot } from 'react-dom/client'
//router
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

//Composants de l'application
////////////FONCTIONS/////////////////
import './js/utils/globals'
////////////ROUTER/////////////////
//Nav barre
import Root from './js/routes/root'
//////////////PAGES///////////////
import ErrorPage from './error-page'
import Home from './js/pages/Home'
import { Login } from './js/pages/Login'
/////////////////////////////
//On récupère la balise title et on y ajoute du texte
document.querySelector('title').textContent = 'Romie'

///////////////OLD////////////////
//Affichage du composant de navigation
// let appNav = document.querySelector('.app-nav')
// const nav = createRoot(appNav)
// nav.render(<Navigation />)
///////////////END OLD////////////////

//Affichage du contenu
//1 . on récupère la classe html
let appContent = document.querySelector('.app-content')
///////////////NEW METHOD////////////////

//2 . Call createRoot to create a React root for displaying content inside a browser DOM element
const root = createRoot(appContent)

//3 . on injecte
//Call root.render to display a piece of JSX (“React node”) into the React root’s browser DOM node.
//React will display content in the root, and take over managing the DOM inside it.

//React. StrictMode is a tool that highlights potential issues in a programme. It works by encapsulating a portion of your full application as a component. StrictMode does not render any visible elements in the DOM in development mode, but it enables checks and gives warnings

// root.render(
//     <BrowserRouter>
//         <Routes>
//             {/* <Route path='/' element={<Home/>}/> */}
//             {/* same as  */}
//             <Route index element={<Root />} />
//             <Route path="/login" element={<Login />} />
//         </Routes>
//     </BrowserRouter>
// )
//OR
//React router 6.4 Nouvelle approche de gérer le routing
//https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="accueil" element={<Home />} />
            <Route path="connexion" element={<Login />} />
            {/* <Route element={<AuthLayout />}>
                <Route
                    path="login"
                    element={<Login />}
                    loader={redirectIfUser}
                />
                <Route path="logout" />
            </Route> */}
        </Route>
    )
)

root.render(<RouterProvider router={router} />)
/////////////////////////////
//<TESTS
/////////////////////////////
import Test from './js/components/Test'

const hero1 = new Test('Varg')

console.log(hero1.greet())
/////////////////////////////
//TESTS/>
/////////////////////////////
