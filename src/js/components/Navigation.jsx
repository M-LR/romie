import React from 'react'
//router
import { Link, NavLink } from 'react-router-dom'
export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>

                <nav>
                    <ul>
                        {/* <li>
                            <a href={`/accueil`}>Accueil</a>
                        </li>
                        <li>
                            <a href={`/login`}>Login</a>
                        </li> */}
                        <Link to="/">Accueil</Link>
                        {/* --> <a href="/">Accueil</a>
                        avec Navlink une classe est générée  */}
                        {/* voir https://www.youtube.com/watch?v=XN7E5tKM-no&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=2 */}
                        <NavLink to="login">Login</NavLink>
                        {/* --> <a class="" href="/login">Login</a> */}
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}
