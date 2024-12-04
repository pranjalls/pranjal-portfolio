import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <Container>
        {/* Introduction Section */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="about-heading">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and I’ve learned quite a bit—at least, I think so… 🤷‍♂️
              <br />
              <br />
              I'm fluent in languages like
              <i>
                <b className="purple"> C++, HTML, CSS, Javascript.</b>
              </i>
              <br />
              <br />
              My areas of interest include building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>{" "}
              and exploring the fascinating world of{" "}
              <b className="purple">Cloud.</b>
              <br />
              <br />
              With a keen interest in software development and a
drive to learn and grow, I am committed to leveraging my skills and knowledge to contribute meaningfully to the field.
            </p>
          </Col>

          {/* Avatar Image */}
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Media Links Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              {/* GitHub Link */}
              <li className="social-icons">
                <a
                  href="https://github.com/pranjalls"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn Link */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pranjal-pshinde/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram Link */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pranjal_.77/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;
