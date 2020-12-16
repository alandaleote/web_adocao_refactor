import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import FormRoutes from './FormRoutes'



export default props => 
    <BrowserRouter>
        <div id="appForm" className="app">
            <Logo/>
            <Nav/>
            <FormRoutes/>
            <Footer/>
        </div>
    </BrowserRouter>