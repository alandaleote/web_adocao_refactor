import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default _props => 
    <aside className='menu-area'>
        <nav className="menu">
            <Link to="/home">
                <i className="fa fa-home">  Inicio</i> 
            </Link>
            <Link to="/home/users">
                <i className="fa fa-user">  Usuários</i> 
            </Link>
            <Link to="/home/pet">
                <i className="fa fa-paw"> Pets</i> 
            </Link>
            <Link to="/home/ong">
                <i className="fa fa-users"> Ongs</i> 
            </Link>
            <Link to="/home/adotante">
                <i className="fa fa-heart"> Adotantes</i> 
            </Link>
            <Link target="_blank" to="/">
                <i className="fa fa-paw">   Pets</i> 
            </Link>
        </nav>
    </aside>