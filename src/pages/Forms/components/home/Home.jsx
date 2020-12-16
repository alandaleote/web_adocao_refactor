import React from 'react'
import Main from '../Main/Main'
import BannerImg from '../../../../assets/banner.png'

export default _props => 
    <Main icon="home" title= "Inicio" 
    subtitle="Formulário" className="container-main">
        <div className="display-4"></div>
        <hr/>
        <p className="mb-0"></p>
        <div className="div-banner">
            <img alt="adocao" className="img-banner" fixed="top" src={BannerImg}></img>
        </div>
    </Main>