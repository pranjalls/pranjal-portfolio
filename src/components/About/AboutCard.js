import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranjal Shinde </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently pursuing my B.Tech degree in Computer Engineering from Jspm RSCOE.
            <br /><br/>
            I am a passionate and dedicated developer with a flair for creating user-friendly and innovative web applications.
            With a strong foundation in modern technologies and a keen eye for design, I strive to deliver impactful digital solutions that enhance user experiences.
            <br/><br/>
          Apart from curriculum, I love,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pranjal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
