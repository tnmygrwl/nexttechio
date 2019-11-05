import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { Container, Row, Col } from 'reactstrap'; //for row & column
import Iframe from 'react-iframe'   //for the map
import { FiFacebook, FiInstagram, FiLinkedin,FiGithub } from "react-icons/fi"; //icons


import './styles/Main.scss'

const Space = () => <div className="space"></div>



export default class Main extends Component {

    news = [{
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    },
    {
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    },
    {
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    },
    {
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    },
    {
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    }, {
        title: 'Satoshi Lab Wins Accenture Blockchain Hackathon',
        date: 'Dec 25 2018'
    }]


    render() {
        return (
            <div className="main">

                <Space />

                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">01 OUR MISSION</Col>
                        </Row>
                        <Row>
                            <Col>We believe everyone has the capacity to be creative. Next Tech Lab is a
                            place where people use design to develop their own creative potential . Yes, we
                            need to come up with a better mission statement.
                        </Col>
                        </Row>
                    </Container>
                </Fade>


                <Container className="container">
                    <Fade>
                        <Row>
                            <Col className="title">02 RESEARCH GROUPS</Col>
                        </Row><Space />
                        <Row>
                            <Col xs="6">
                                <div className='imgg'>
                                    <img src={'https://image.freepik.com/free-vector/flat-robot-collection-with-different-poses_23-2147723814.jpg'} width='100%' />
                                </div>
                            </Col>
                            <Col xs="5">
                                <h3>Minisky Lab</h3>
                                Understanding architechture that exhibit 'intelligence' and deploying novel models to solve real world problems.
                                <br /> <br />
                                <a href={'http://www.google.com'}>LEARN MORE</a>

                            </Col>
                        </Row>
                    </Fade>

                    <Space />
                    <Space />


                    <Fade>
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <h3>Pausch Lab</h3>
                                Understanding architechture that exhibit 'intelligence' and deploying novel models to solve real world problems.
                                <br /> <br />
                                <a href={'http://www.google.com'}>LEARN MORE</a>

                            </Col>

                            <Col xs="5">
                                <div className='imgg'>
                                    <img src={'https://image.freepik.com/free-vector/flat-robot-collection-with-different-poses_23-2147723814.jpg'} width='100%' />
                                </div>
                            </Col>

                        </Row>
                    </Fade>

                    <Space />
                    <Space />
                    <Fade>
                        <Row>
                            <Col xs="6">
                                <div className='imgg'>
                                    <img src={'https://image.freepik.com/free-vector/flat-robot-collection-with-different-poses_23-2147723814.jpg'} width='100%' />
                                </div>
                            </Col>
                            <Col xs="5">
                                <h3>Satoshi Lab</h3>
                                Understanding architechture that exhibit 'intelligence' and deploying novel models to solve real world problems.
                                <br /> <br />
                                <a href={'http://www.google.com'}>LEARN MORE</a>

                            </Col>
                        </Row>
                    </Fade>


                    <Space />
                    <Space />


                    <Fade>
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <h3>Tesla Lab</h3>
                                Understanding architechture that exhibit 'intelligence' and deploying novel models to solve real world problems.
                                <br /> <br />
                                <a href={'http://www.google.com'}>LEARN MORE</a>

                            </Col>

                            <Col xs="5">
                                <div className='imgg'>
                                    <img src={'https://image.freepik.com/free-vector/flat-robot-collection-with-different-poses_23-2147723814.jpg'} width='100%' />
                                </div>
                            </Col>

                        </Row>
                    </Fade>

                </Container>



                <Space />

                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">03 NEWS FLASH</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='news'>

                                    {this.news.slice(0, 4).map((v, k) => {
                                        return (
                                            <div className="items">
                                                <div className="t"> {v.title} </div>
                                                <div className="d">{v.date}</div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>



                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">04 ACHIEVEMENTS</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className='gallery'>

                                    <div class="column">
                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" width={'100%'} /></div>
                                        </div>


                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width={'100%'} /></div>
                                        </div>

                                    </div>


                                    <div class="column">


                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width={'100%'} /></div>
                                        </div>

                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" width={'100%'} /></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Button className="center" outline color="primary">READ MORE</Button>{' '}

                    </Container>
                </Fade>


                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">05 BLOG</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className='gallery'>

                                    <div class="column">



                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width={'100%'} /></div>
                                        </div>

                                    </div>


                                    <div class="column">


                                        <div className="imageContainer">
                                            <div className="t2">Developer Week Hackathon</div>
                                            <div className="t3">SAN FRANCISCO, USA</div>
                                            <div className="imgFlex">
                                                <img src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width={'100%'} /></div>
                                        </div>


                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Button className="center" outline color="primary">READ MORE</Button>{' '}

                    </Container>
                </Fade>

                <Fade>
                    <Container className="container">
                        <Row>
                            <Col className="title">06 Contact</Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <Iframe url="https://maps.google.com/maps?q=next%20tech%20lab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="450px"
                                    id="myId"
                                    frameBorder="0"
                                    className="myClassname"
                                    display="initial"
                                    position="relative" />

                            </Col>
                            <Col sm="1"></Col>
                            <Col sm="4" className="contact">
                                    <br></br>
                                    <div className="title">JOIN US</div>
                                    <div>We conduct recruitments every semester. Message our Facebook page to apply</div>
                                    <br/>
                                    <br/>
                                    <div className="title">ADDRESS</div>
                                    <div>UB-706, University Building, SRM Institute of Science and Technology, Kattankulathur - 603203</div>
                                    <br/>
                                    <br/>
                                    <div className="title">EMAIL</div>
                                    <div>info@nextech.io</div>
                                    <br/>
                                    <div className="contactIcon"> 
                                         <FiFacebook size={30}/>
                                        <FiInstagram size={30}/>
                                        <FiLinkedin size={30}/>
                                        <FiGithub size={30}/>
                                        
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>

<img src={'./next-tech-logo.png'} className="flogo"/>
<div className="copyright">© 2019 Next Tech Lab</div>

            </div>
        )
    }
}
