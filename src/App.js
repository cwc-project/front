import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from 'react'
import HeaderContainer from './containers/HeaderContainer'
import GreetingContainer from './containers/GreetingContainer'
import Footer from './components/Footer'

export default function App() {
    return (
        <Fragment>
            <HeaderContainer />
            <GreetingContainer />
            <Footer />
        </Fragment>
    )
}