import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;
