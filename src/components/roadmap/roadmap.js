import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Stop 1',
                    title: 'The Balls Dropped',
                    content: 'Welcome to the Dick Pix community! Our public mint is live and we rock out with our....well, you know the rest. '
                },
                {
                    tag: 'Stop 2',
                    title: 'Send a Pix',
                    content: 'Stop being rookie with your dick pix game. One lucky holder will receive the "better dick pix package" of a new iPhone, Macbook Pro, and a ring light! *US based residents only, ETH equivalent outside of US*'
                },
                {
                    tag: 'Stop 3',
                    title: 'Unsolicited Dicks',
                    content: 'Our airdrop giveaways (aka unsolicited dick pix) start! 5 unsuspecting holders will receive our Dicks.'
                },
                {
                    tag: 'Stop 4',
                    title: 'Dix-elated',
                    content: 'Draw me like one of your French girls! Jen is going to "dickselate" 5 lucky holders and turn their likeness (not their actual Dicks) into Dick Pix characters to forever live on the "cock-chain".'
                },
                {
                    tag: 'Stop 5',
                    title: 'Banana Hammock',
                    content: 'Member exclusive merch design initiates. Holders get to design and have input on our new merch concepts.'
                },
                {
                    tag: 'Stop 6',
                    title: 'Wrap it up',
                    content: 'Our dick philanthropy begins! Proceeds of every mint sale go to sexual health and wellness organizations for STD/STI testing, family planning, and safe sex education and wellness practices.'
                },
                {
                    tag: 'Stop 7',
                    title: 'BAG OF DICKS',
                    content: 'THE DICK GAME BEGINS! It\'s like go fish, but with dicks. Collect all the dicks in it\'s matching series for more exclusive, rare airdrops, giveaways, and more!'
                },
                {
                    tag: 'Stop 8',
                    title: 'Just the Tip',
                    content: 'Special limited collection series dropped to our holders, planned by our holders for the game to continue on and GROW- this is just the beginning.'
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{textAlign: "center"}}>
                <Container >
                    <header style={{fontWeight: 900}}><span>WYD? U UP?</span> <br/> I'M COMING THROUGH. BUT I HAVE A FEW STOPS TO MAKE...</header>
                    <p className='roadmap-description'>
                    The Dick Pix Roadmap dick-tates some of the holder perks members will be able to enjoy. We are constantly brainstorming, developing and evolving ideas for our community to create an interactive and fun space. Follow this fuck boys drive to see where he ends up...
                    </p>
                    <Row style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                        <Col xs={12} md={6}>
                            <video autoplay="autoplay" loop="true" src={roadmap} alt='roadmap' type="video/mp4" />
                        </Col>
                        <Col  style={{color: "black", alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return(
                                        <RoadMapItem style={{textAlign: "center", color: "black"}}key={index}
                                            tag= {item.tag}
                                            title= {item.title}
                                            content= {item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default RoadMap;