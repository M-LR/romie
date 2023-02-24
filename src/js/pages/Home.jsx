import React, { Component } from 'react'
//Composants de l'application

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/import

//On peut utiliser une classe ES6 pour définir un composant
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="container mx-auto px-4">
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>{' '}
            </div>
        )
    }
}

export default Home
