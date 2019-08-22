import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Header } from './components'
import './index.css'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/inicia-sesion' component={Login}/>
                        <Route exact path='/registrate' component={Register}/>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default App
