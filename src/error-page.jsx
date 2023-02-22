import React from 'react'
import { useRouteError } from 'react-router-dom'

// class ErrorPage extends Component {
//     constructor(props) {
//         // 🔴 On ne peut pas utiliser `this` à ce stade
//         //fait ref à la classe parente ici Component
//         super(props)
//         // ✅ Mais maintenant c’est bon !
//         this.error = useRouteError()
//     }

//     render() {
//         return (
//             <div id="error-page">
//                 <h1>Oops!</h1>
//                 <p>Sorry, an unexpected error has occurred.</p>
//                 <p>
//                     <i>{this.error.statusText || this.error.message}</i>
//                 </p>
//             </div>
//         )
//     }
// }

// export default ErrorPage
export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
