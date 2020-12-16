  
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  './style.css'
import FaceIcon from '../../../../assets/icon-face.png'
import InstaIcon from '../../../../assets/icon-insta.png'
import WhatsIcon from '../../../../assets/icon-whats.png'
import MailIcon from '../../../../assets/icon-mail.png'
import Contact from './textos.json'


function Footer(){
    return (  
            <div id ="Contato" className="container-footer" fixed="bottom" >
                <Row className="row-style">
                    <Col className="footerStyle-texts">
                        <Col>{Contact.data.contact}</Col>
                        <Col>{Contact.data.telephone}</Col>
                    </Col>
                    <Col>
                        <Col className="social-media-icons" >
                            <a className="icon-style" target="_blank" href="https://webadocao.herokuapp.com/"><img src={WhatsIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="https://webadocao.herokuapp.com/"><img src={MailIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="https://webadocao.herokuapp.com/"><img src={FaceIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="https://webadocao.herokuapp.com/"><img src={InstaIcon} width="100px"></img></a>
                        </Col>
                    </Col>  
                </Row>
            </div>
        )
}
export default Footer;