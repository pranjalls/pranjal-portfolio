import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from '../../components/Particle'; // If Particle.js is in components folder

import Home2 from '../../components/Home/Home2'; // Assuming Home2.js is in `src/components/`


import Type from "./Type";

function Home() {
  return (
    <section>
      {/* Home Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Left Column with Text */}
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PRANJAL SHINDE</strong>
              </h1>

              <div className="type-wrapper">
                <Type />
              </div>
            </Col>

            {/* Right Column with Image */}
            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Additional Section */}
      <Home2 />
    </section>
  );
}

export default Home;
