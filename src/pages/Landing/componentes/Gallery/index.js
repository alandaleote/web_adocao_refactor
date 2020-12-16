  
import React from 'react';
import {Tab, Tabs, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Img01 from '../../../../assets/imgBib.png'
import Img02 from '../../../../assets/imgBob.png'
import Img03 from '../../../../assets/imgBoc.png'
import Img04 from '../../../../assets/imgBec.png'
import Img05 from '../../../../assets/imgFaf.png'
import Img06 from '../../../../assets/imgFif.png'
import Img07 from '../../../../assets/imgFof.png'
import Img08 from '../../../../assets/imgGal.png'
import Img09 from '../../../../assets/imgCoe.png'
import Img10 from '../../../../assets/imgSer.png'
import TextosGallery from './textos.json'

function Gallery() {
    return (
        <div id="Gallery" className='container-gallery'>
        <h1 className="title-gallery">{TextosGallery.gallery.title}</h1>
        <Tabs defaultActiveKey="profile">
            <Tab eventKey="Todos" title="Todos">

            <div className="row">
                
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img01} width="100px"/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img02}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img03}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card3.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card3.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row">

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img04}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card4.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card4.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img05}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card5.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card5.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img06}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img07}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img08}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>

            
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img09}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </Tab>

          <Tab eventKey="Pets" title="Pets">

            <div className="row">
                
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img01} width="100px"/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img02}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img03}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card3.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card3.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row">

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img04}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card4.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card4.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img05}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card5.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card5.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img06}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Img07}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </Tab>
        <Tab eventKey="Diversos" title="Diversos">

        <div className="row">
            
            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Img08} width="100px"/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Img09}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Img10}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </Tab>
        <Tab eventKey="close" title="Fechar"></Tab>
        </Tabs>
        </div>
     
    )
}
export default Gallery;
