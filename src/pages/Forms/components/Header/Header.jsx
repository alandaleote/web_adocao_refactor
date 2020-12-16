import './Header.css'
import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => 
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
        <Navbar bg="dark" variant="dark">
            <Form inline>
                <Button variant="outline-info" to="/ongpage">Login</Button>
            </Form>
      </Navbar>
    </header>