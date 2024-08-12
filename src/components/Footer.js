import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Tada from "react-reveal/Tada";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harshit-arora-560042195">
                <img src={navIcon1} alt="Icon" />
              </a>
              \
              <a href="https://www.instagram.com/harshitarora.?igsh=cmM1MHA3d29nemVt&utm_source=qr">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <Tada>
              <p className="copyright">&copy; Mr. Robot. All rights reserved</p>
            </Tada>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
