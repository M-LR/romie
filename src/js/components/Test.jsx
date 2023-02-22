///import React, { Component } from 'react'
// Les déclarations de fonctions sont remontées dans le code. En revanche, ce n'est pas le cas pour les déclarations de classes. Ainsi, il est nécessaire de déclarer la classe avant de l'instancier. Dans le cas contraire, on obtient une ReferenceError

function Welcome(props) {
    return <h1>Bonjour, {props.name}</h1>
}
//équivalent à :
const SecondWelcome = (props) => {
    return <h1>Bonjour, {props.name}</h1>
}
// Cette fonction est un composant React valide car elle accepte un seul argument « props » (qui signifie « propriétés ») contenant des données, et renvoie un élément React. Nous appelons de tels composants des « fonctions composants », car ce sont littéralement des fonctions JavaScript.
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

// Vous pouvez également utiliser une classe ES6 pour définir un composant :
export default class Test {
    constructor(name) {
        this.name = name
        this.date = new Date().toLocaleTimeString()
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello ! ${this.date}`
    }
    //Le mot-clé static permet de définir une méthode statique pour une classe. Les méthodes statiques sont appelées par rapport à la classe entière et non par rapport à une instance donnée (ces méthodes ne peuvent pas être appelées « depuis » une instance). Ces méthodes sont généralement utilisées sous formes d'utilitaires au sein d'applications.

    //Le mot-clé super est utilisé pour appeler les fonctions rattachées à un objet parent.
}
