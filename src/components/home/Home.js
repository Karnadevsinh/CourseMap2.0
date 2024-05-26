import React, {useState} from 'react'
import {Card, Carousel, Button} from 'react-bootstrap';
import bgVideo from "../../assets/Sail-Away.mp4"
import bgVideo1 from "../../assets/courses2.mp4"
import "bootstrap/dist/css/bootstrap.min.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Marquee from "react-fast-marquee";

import "./homeStyle.css"
import DottedButton from './DottedButton';
import { HoverImageLinks } from './HoverImageLinks';

function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <section id='sec1'>
            <div id='parent'>
                <div>
                    <img
                        src={require("../../assets/The-Ultimate-Guide-to-Software-Development-05-scaled.webp")}
                        alt="1"
                        id='chef'
                        style={{height: "430px", width: "430px", float: "left", marginTop: "-28px", marginRight: "1px"}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/Lifestyle.jpg")}
                        alt="1"
                        id='design'
                        style={{height: "432px", width: "430px", float: "left", marginTop: "26rem", marginLeft: '-27rem'}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/Lead-conversions.jpg.webp")}
                        alt="1"
                        id='design'
                        style={{height: "200px", width: "270px" , float: "inline-start", marginLeft: "0.8rem"}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/fine-arts-A_v2-9240d869d476b3e0d8cb7efc329b46dd.webp")}
                        alt="1"
                        id='design'
                        style={{height: "200px", width: "270px", float: "inline-start", marginLeft: "0.75rem"}}
                    />
                </div>
                <div style={{height: "80px"}}>
                    <div style={{paddingTop: "13.4rem"}}>
                        <div style={{backgroundColor: "white", width: "544px", height: "364px", marginLeft: "28rem"}}>
                            <div id='para' style={{paddingTop: "173px"}}>
                            <p id='titleName'>CourseMap</p>
                                <aside></aside>
                            <video id='vid' className='videoTag' autoPlay loop muted>
                                <source src={bgVideo1} type='video/mp4' />
                            </video>   
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={require("../../assets/Types-of-Businesses-Opener_v2-1024x777.jpeg.webp")}
                        alt="1"
                        id='design'
                        style={{height: "430px", width: "430px", float: "right", marginTop: "-7.4rem", marginLeft: "2px"}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/crafts-artisanship-D_v1-0c8454d6ddf5c724b7ce914c574a2a4d.webp")}
                        alt="1"
                        id='design'
                        style={{height: "442px", width: "430px", float: "right", marginTop: "20.4rem", marginRight: "-27rem"}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/web-development.jpg")}
                        alt="1"
                        id='design'
                        style={{height: "248px", width: "267px", float: "left", marginTop: "25rem", marginLeft: "17px"}}
                    />
                </div>
                <div>
                    <img
                        src={require("../../assets/immigration-integration.png.webp")}
                        alt="1"
                        id='design'
                        style={{height: "248px", width: "267px", float: "right", marginTop: "25rem", marginRight: "0.8rem"}}
                    />
                </div>
            </div>
        </section>
        
        <section id='sec2'>
            <div className='row'>
                <div style={{marginTop: "80px"}} className='col-6'>
                    <h1 style={{fontFamily: "monospace", fontWeight: "bold"}}>One Stop Solution</h1>
                    <h2 style={{fontFamily: "roboto"}}>Don't Surf when you've an...</h2>
                    <h2 style={{fontFamily: "roboto", fontWeight: "bold"}}>All In ONE <span style={{fontWeight: "normal"}}>Turf!</span></h2>
                </div>
                
                <div className='col-6'>
                    <Box sx={{ width: '100%', maxWidth: 630, marginTop: "2rem" }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <img
                                            src={require("../../assets/check-mark.png")}
                                            alt="tick"
                                            className='tick'
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        className='listText'
                                        primaryTypographyProps={{ style: { fontSize: '18px', fontFamily: "serif", fontWeight: "bold" } }}
                                        primary="Learn creative skills to achieve your personal and professional goals." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <img
                                            src={require("../../assets/check-mark.png")}
                                            alt="tick"
                                            className='tick'
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        className='listText'
                                        primaryTypographyProps={{ style: { fontSize: '18px', fontFamily: "serif", fontWeight: "bold" } }}
                                        primary="Tune in and level up at your own pace." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <img
                                            src={require("../../assets/check-mark.png")}
                                            alt="tick"
                                            className='tick'
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        className='listText'
                                        primaryTypographyProps={{ style: { fontSize: '18px', fontFamily: "serif", fontWeight: "bold" } }}
                                        primary="Go from dabbler to master in a matter of hours." />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <img
                                            src={require("../../assets/check-mark.png")}
                                            alt="tick"
                                            className='tick'
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        className='listText'
                                        primaryTypographyProps={{ style: { fontSize: '18px', fontFamily: "serif", fontWeight: "bold" } }}
                                        primary="Connect with a global community of curious creatives." />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </div>
            </div>
        </section>

        <section id='sec3'>
            <div className='row'>
                <Card className='statCard' style={{marginLeft: '80px'}}>
                    <Card.Body>
                        <Card.Title style={{fontWeight: "bold", fontSize: "34px"}}>9K</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Courses</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card className='statCard'>
                    <Card.Body>
                        <Card.Title style={{fontWeight: "bold", fontSize: "34px"}}>5</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Quality Course Providers</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card className='statCard'>
                    <Card.Body>
                        <Card.Title style={{fontWeight: "bold", fontSize: "34px"}}>10+</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Companies Associated</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card className='statCard'>
                    <Card.Body>
                        <Card.Title style={{fontWeight: "bold", fontSize: "34px"}}>25</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Specializations</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Carousel id='caro' activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            src={require("../../assets/caro1.webp")}
                            alt="tick"
                            className='caroImg'
                            style={{height: '510px'}}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={require("../../assets/blockchain-computer-chip-design-fiz106o93z0vhzjb.jpg")}
                            alt="tick"
                            className='caroImg'
                            height={"510px"}
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={require("../../assets/caro3.webp")}
                            alt="tick"
                            className='caroImg'
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>

        <section>
            <HoverImageLinks />
        </section>

        <section id='sec4'>
            <div className='row'>
                <Card className='domains' style={{ width: '18rem', marginLeft: "85px" }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/bef0363c54f8e1fe812943f86ae57339.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchanStudying.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchanStudying2.webp")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchanStudying3.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>
            </div>

            {/* Second Row */}

            <div className='row'>
                <Card className='domains' style={{ width: '18rem', marginLeft: "85px" }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/d380499db707250e7c429aa4881d0a56.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchan1.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchan2.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>

                <Card className='domains' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="imgDomain" src={require("../../assets/shinchan3.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <DottedButton />
                    </Card.Body>
                </Card>
            </div>
        </section>

        <section id='sec5'>
            <div id='mq'>
                <Marquee>
                    <img
                        src={require("../../assets/bbc.png")}
                        alt=""
                        className='mqLogo'
                    />

                    <img
                        src={require("../../assets/microsoft.4a9a93f0.png")}
                        alt=""
                        className='mqLogo'
                    />

                    <img
                        src={require("../../assets/MIT-Logo.png")}
                        alt=""
                        style={{height: "85px", marginRight: "70px"}}
                    />

                    <img
                        src={require("../../assets/princeton.5d0a5006.png")}
                        alt=""
                        className='mqLogo'
                    />  

                    <img
                        src={require("../../assets/google-white-logo.png")}
                        alt=""
                        className='mqLogo'
                    />

                    <img
                        src={require("../../assets/apple-logo-transparent.png")}
                        alt=""
                        className='mqLogo'
                        style={{marginTop: "-10px"}}
                    />

                    <img
                        src={require("../../assets/EdX_newer_logo.svg.png")}
                        alt=""
                        className='mqLogo'
                    />

                    <img
                        src={require("../../assets/coursera-logo-black-transparent.png")}
                        alt=""
                        className='mqLogo'
                    />
                </Marquee>
            </div>
        </section>
    </div>
  )
}

export default Home