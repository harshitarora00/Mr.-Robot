import "react-multi-carousel/lib/styles.css";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                ></div>
              )}
            </TrackVisibility>
          </Col>

          <h2>About Me</h2>
          <p>
            Hi ! I am Elliot Alderson aka Mr. Robot. I am a cybersecurity
            engineer at Allsafe by day and a anarchic vigilante hacker by night.
            I have social anxiety disorder, clinical depression, and
            dissociative identity disorder. I am also paranoid, anxious, angry,
            delusional, and depressed, but also intelligent.
          </p>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" className="aboutimg" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
