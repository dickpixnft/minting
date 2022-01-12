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
                    content: 'Welcome to the Dick Pix community! Our public mint is live and we rock out with our....well, you know the rest.'
                },
                {
                    tag: 'Stop 2',
                    title: 'Unsolicited Airdrops',
                    content: 'Our airdrop giveaways (a.k.a. unsolicited dick pix) begin! 5 unsuspecting holders will each receive 1 Dick.'
                },
                {
                    tag: 'Stop 3',
                    title: 'Dix-elated',
                    content: 'Draw me like one of your French girls! Jen is going to "dix-elate" 5 lucky holders and turn their likeness (not their actual Dicks) into 1/1 Dick Pix characters to forever live on the "cock-chain".'
                },
                {
                    tag: 'Stop 4',
                    title: 'Big Package Giveaway',
                    content: 'One lucky holder will receive the "Better Dick Pix Package" of a new iPhone, Macbook Pro, and a ring light! *US based residents only, ETH equivalent outside of US*'
                },
                {
                    tag: 'Stop 5',
                    title: 'Banana Hammock',
                    content: 'Member exclusive merch design initiates. Holders get to design and have input on our new merch concepts.'
                },
                {
                    tag: 'Stop 6',
                    title: 'Wrap It Up',
                    content: 'Our dick philanthropy begins! A portion of the proceeds from mint go to sexual health and wellness organizations for STD/STI testing, family planning, and safe sex education and wellness practices.'
                },
                {
                    tag: 'Stop 7',
                    title: 'Bag of Dicks',
                    content: 'WE SOLD OUT! THE DICK GAME NOW BEGINS. It\'s like Go Fish, but with dicks. Collect all the dicks in a set and receive exclusive, super rare airdrops, giveaways, and more!'
                },
                {
                    tag: 'Stop 8',
                    title: 'Community Sack',
                    content: 'The “Community Sack” Wallet is dropped! Royalties are set at 10% for the collection. 50% of these royalties will be allocated for holders to receive exclusive giveaways, airdrops, prizes, and ongoing community development. The remaining 50% will be used for business expenses - such as marketing and staffing - to ensure continued growth and success for our Dick Pix community.'
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