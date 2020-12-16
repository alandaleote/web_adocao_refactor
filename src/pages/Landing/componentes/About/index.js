import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import AboutImg from '../../../../assets/about.jpg'
import './style.css';
import AboutTexto from './textos.json'

function About() {
   
    return (
      
        <div id="About" className="container-about">
        <div className="img_card">
        <Card>
            <Card.Body>
            <Card.Img alt="Adocao" className="img-banner"  src={AboutImg}></Card.Img>
            </Card.Body>
        </Card>
        </div>
        <div>
            <Card className="text_card" fixed="top">
            <Card.Body>
                <Card.Title className='.title-card-about'>{AboutTexto.about.title}</Card.Title>
                <Card.Text className='.text-card-about'>{AboutTexto.about.content}</Card.Text>
            </Card.Body>
            </Card>
        </div>
        </div>   
    )
}

export default About;