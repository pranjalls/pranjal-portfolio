import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tindog Website"
              description="Tindog is a playful web application designed as a parody of dating apps, but for dogs! It allows users to create profiles for their furry friends, showcasing their personalities and interests, and match with other dogs for playdates or companionship"
              ghLink="https://github.com/pranjalls/Tindog-Project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hunger Hustle"
              description="A fast food website project designed to provide a quick, user-friendly experience for customers. It features an intuitive menu, easy online ordering, and exclusive deals, all crafted to make ordering fast food more convenient and enjoyable."
              ghLink="https://github.com/pranjalls/Hunger-Hustle.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PulseForge Fitness"
              description="It focused on delivering a sleek, user-friendly platform for fitness enthusiasts. It features workout plans, membership options, and wellness resources, all designed to motivate and guide users on their fitness journey."
              ghLink="https://github.com/pranjalls/PulseForge-Fitness.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dice Dash"
              description="A 2-dice game website project featuring simple, interactive gameplay where players roll dice, track scores, and enjoy a sleek, engaging interface. Perfect for casual gaming fun!"
              ghLink="https://github.com/pranjalls/Rolling-Dice-Game.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="VocabVista"
              description="A word dictionary website project offering quick access to definitions, synonyms, and word meanings. Designed with a clean interface and efficient search functionality to enhance vocabulary and learning."
              ghLink="https://github.com/pranjalls/VocabVista.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="RhythmRumble"
              description="A drum kit website project featuring an interactive virtual drum set. Users can play various drum sounds with clicks or keyboard inputs, delivering a fun and engaging musical experience online."
              ghLink="https://github.com/pranjalls/RhythmRumble.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
