// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="soumyajit4419"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       />
//     </Row>
//   );
// }

// export default Github;

import React from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Here's Some Inspiration for Your Day
      </h1>
      <Col md={8} sm={12}>
        <Carousel>
          {/* First Slide */}
          <Carousel.Item>
            <Card className="text-center" style={{ border: "none" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "purple",
                    marginBottom: "20px",
                  }}
                >
                  "The only way to do great work is to love what you do."
                  <br />
                  <strong>- Steve Jobs</strong>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    color: "purple",
                  }}
                >
                  Keep pushing forward and remember that passion drives success. 💪
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <Card className="text-center" style={{ border: "none" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "purple",
                    marginBottom: "20px",
                  }}
                >
                  "Success is not final, failure is not fatal: It is the courage to continue that counts."
                  <br />
                  <strong>- Winston Churchill</strong>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    color: "purple",
                  }}
                >
                  Stay courageous, even in the face of challenges. 🌟
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item>
            <Card className="text-center" style={{ border: "none" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "purple",
                    marginBottom: "20px",
                  }}
                >
                  "The way to get started is to quit talking and begin doing."
                  <br />
                  <strong>- Walt Disney</strong>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    color: "purple",
                  }}
                >
                  Action is the key to progress. Take the first step today! 🚀
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Fourth Slide */}
          <Carousel.Item>
            <Card className="text-center" style={{ border: "none" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "purple",
                    marginBottom: "20px",
                  }}
                >
                  "Don't watch the clock; do what it does. Keep going."
                  <br />
                  <strong>- Sam Levenson</strong>
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    color: "purple",
                  }}
                >
                  Time waits for no one, so make every moment count! ⏳
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Github;

