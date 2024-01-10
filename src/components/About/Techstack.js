import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiRstudio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWordpress />
      </Col>
    </Row>
  );
}

export default Techstack;
