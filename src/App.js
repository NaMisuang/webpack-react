import React, { Component } from "react"
import Test from "./TestModel/Test.jsx"

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    this is head
                </header>
                <main>
                    <Test />
                </main>
                <footer>this is footer</footer>
            </div>
        )
    }
}

export default App