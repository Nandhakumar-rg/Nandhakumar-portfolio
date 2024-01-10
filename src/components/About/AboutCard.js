import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nandhakumar Ranganathan Ganesh </span>
            from India.
            <br />
            I am currently doing my Master's at <span className="purple">Florida State University, USA.</span>
            <br />
            I have completed my Computer Science Engineering at <span className="purple">Kongu Engineering College, India.</span>
            <br />
            I worked as a Full Stack Web Developer Intern at <span className="purple">Coats Group, India.</span>
            <br />
            Apart from Computer Knowledge, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cook
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
