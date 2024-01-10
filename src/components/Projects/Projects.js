import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import R_program from "../../Assets/Projects/R_program.png";
import python from "../../Assets/Projects/python.png";


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
              imgPath={R_program}
              isBlog={false}
              title="Exponential-Data-Analysis-using-Regression-Model"
              description="Developed and refined diverse regression models in R. Conducted model diagnostics and predicted values."
              ghLink="https://github.com/Nandhakumar-rg/Exponential-Data-Analysis-using-Regression-Model."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Soil-Moisture-Detection-and-Plant-Recommendation-using-IOT-enabled-Wireless-Sensors"
              description="Designed IoT-based system for soil moisture monitoring and Nutrition monitoring. Enabled remote control and operation of devices based on soil moisture levels for farmers."
              ghLink="https://github.com/Nandhakumar-rg/Soil-Moisture-Detection-and-Plant-Recommendation-using-IOT-enabled-Wireless-Sensors"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="AI-Powered-Smart-Surveillance-System-for-License-Plate-Detection-of-Violators"
              description="Computed Surveillance system built with YOLO and ANPR based algorithms. Developed a mobile app using Flutter for efficient tracking. • Approved and published in ICCCI (IEEE) Conference 2023."
              ghLink="https://github.com/Nandhakumar-rg/AI-Powered-Smart-Surveillance-System-for-License-Plate-Detection-of-Violators"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Smart-Baby-Monitoring-System-using-Yolo-V7"
              description="Object Detection with Machine Learning Algorithm. Published in ICITRI (IEEE) Conference 2022."
              ghLink="https://github.com/Nandhakumar-rg/Smart-Baby-Monitoring-System-using-Yolo-V7"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Multi-Class-Classification-of-MonkeyPox-using-MobileApp-with-Conv2D-VGG-19"
              description="Developed a Keras model for classification and a Flutter Mobile App for users to detect pox. Submitted for International Journal Elsevier."
              ghLink="https://github.com/Nandhakumar-rg/Multi-Class-Classification-of-MonkeyPox-using-MobileApp-with-Conv2D-VGG-19"
              // demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Football-Match-Prediction-using-RF-Classifier"
              description="Utilized Random Forest for match result predictions based on performance history Published in ICAIBC (IEEE) Conference 2023"
              ghLink="https://github.com/Nandhakumar-rg/Football-Match-Prediction-using-RF-Classifier"
              // demoLink=""      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
