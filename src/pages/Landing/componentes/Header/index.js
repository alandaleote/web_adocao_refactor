import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavId from './texts.json'
import Logo from '../../../../assets/adocaoLogo.png'

function Header(){
    return (
    <div  id="home" className='container-header'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="home"><img src={Logo} height="100px"></img></Navbar.Brand> 
             <Nav className="mr-auto">
                <Nav.Link href="#Contato">{NavId.id.contact}</Nav.Link>
                <Nav.Link href="#About">{NavId.id.about}</Nav.Link>
                <Nav.Link href="#Gallery">{NavId.id.gallery}</Nav.Link>
                <Nav.Link href="#LoginAuth">{NavId.id.gallery}</Nav.Link>
            </Nav>
            <Button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#examplemodal">Login </Button> 
            
        <div id="examplemodal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
    

                    <div class="modal-body">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>       
                       <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-lg" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-outline-secondary" data-target="#appForm" >Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Navbar>
</div>
)
}
export default Header;

