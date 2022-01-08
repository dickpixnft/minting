import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/about.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control'>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header>
                                <span>3000</span> DICKS.<br/>
                                <span>777</span> ORIGINALS.<br/>
                                <span>2223</span> SPECIALS.<br/>
                                <span>1</span> GAME.
                            
                            </header>
                            {/* <p>
                            In the depths of the Ethereum "cock-chain" lies a Fuck Boy's phone with an outgoing message folder as long as a CVS receipt. You never asked to receive that unsolicited pic, but he doesn’t care- he’s going to send it anyway. Will it entice you to show up at his house at 2AM, laugh because you thought it was his thumb, or send it around to show all your closest friends? We hope it’s the latter.
                            </p> */}
                            <p>
                            Dick Pix offers 777 unique, hilariously hand-drawn digital collectibles that represent community through ownership, and championing safer sex practices. This project blends nostalgic characters inspired by your favorite films, likenesses of people you know and love, and big comedic vibes to create a limited series of collectibles. The Dick Pix community enjoys sarcastic undertones, reading between the lines, and casual innuendos that bring laughter to the forefront of our philanthropic efforts. Portions of our sales are redistributed to charities and organizations that aid in STD/STI testing, family planning, and all-inclusive sexual wellness safety and education.                            </p>
                            
                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{border: "solid black 10px", borderRadius: 20}}src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;