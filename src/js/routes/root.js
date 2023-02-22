import React from 'react'

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>

                <nav>
                    <ul>
                        <li>
                            <a href={`/accueil`}>Accueil</a>
                        </li>
                        <li>
                            <a href={`/login`}>Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}
