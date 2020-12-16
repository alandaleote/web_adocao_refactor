import React from 'react';
import Header from'./componentes/Header'
import Banner from './componentes/Banner'
import About from './componentes/About'
import Footer from './componentes/Footer'
import Gallery from './componentes/Gallery'
import './style.css'

function Landing() {
    return (
        <div className="App">
            <main className="App-content">
                <Header/>
                <Banner/>
                <About/>
                <Gallery/>
                <Footer/>
            </main>
        </div>
    )
}
export default Landing;