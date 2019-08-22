import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Header, Footer } from './components'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './styles'
import './index.css'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    <CssBaseline>
                        <ThemeProvider theme={theme}>
                            <Header/>
                            <section>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/inicia-sesion' component={Login}/>
                                <Route exact path='/registrate' component={Register}/>
                            </section>
                            <Footer/>
                        </ThemeProvider>
                    </CssBaseline>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default App
