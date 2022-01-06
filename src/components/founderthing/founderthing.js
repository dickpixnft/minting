import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/team/dicklogo.png";
import YButton from "../basic/YButton";

//import CSS
import "./founderthing.css";
class About extends React.Component {
  render() {
    return (
      <div className="about-control" id="team">
        <Container>
          <Row>
            <Col
              md={6}
              xs={12}
              className="about-description"
              style={{ textAlign: "center" }}
            >
              <header style={{ textAlign: "center'", marginBottom: 0 }}>
                <span>OUR</span> FOUNDER
                <br />
              </header>
              <a
                href="https://instagram.com/jenfassino"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: 30,
                  marginTop: 0,
                  paddingTop: 0,
                }}
              >
                @jenfassino
              </a>
              Dick Pix was conceived and developed by Jen Fassino, pixel artist
              and host of the “Jen AF” comedy podcast. Her love of pixel art and
              comedy, combined with her philanthropic efforts to expand safe sex
              education and best practices, led her to create a hand-drawn,
              completely unique 1/1 digital art collection of 777 pixelated
              dicks. Funny with a cause, Jen is known for disarming taboo
              conversations around sex through her comedic art, with a focus on
              advocating safe sex practices and combating sexual harassment. She
              is the unexpected female artist behind the collection that the NFT
              space never saw coming.
              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
