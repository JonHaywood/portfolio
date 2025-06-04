import { Col, Container, Row } from "react-bootstrap";
import { FaCloud, FaDatabase, FaUserAlt, FaWrench } from "react-icons/fa";
import { Particle } from "@/components/Particle";
import { AboutCard } from "./AboutCard";
import laptopImg from "@/assets/about.webp";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="centered-row">
          <Col md={7} className="about-col">
            <h1 className="about-heading">
              Who <strong className="purple">I Am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <div className="skillsets">
          <div className="skillset">
            <h2 className="skillset-heading">
              <FaUserAlt /> User Facing
            </h2>
            <div className="skills">React, Next.js, TypeScript, CSS</div>
          </div>

          <div className="skillset">
            <h2 className="skillset-heading">
              <FaDatabase /> Backend & Data
            </h2>
            <div className="skills">
              Node.js, ASP.NET, C#, Python, MSSQL, PostgresSQL, MongoDB, Redis
            </div>
          </div>

          <div className="skillset">
            <h2 className="skillset-heading">
              <FaWrench /> Build Tools & CI/CD
            </h2>
            <div className="skills">Webpack, babel, Jest, vitest, Docker</div>
          </div>

          <div className="skillset">
            <h2 className="skillset-heading">
              <FaCloud /> Cloud Platforms
            </h2>
            <div className="skills">AWS, Azure</div>
          </div>
        </div>
      </Container>
    </Container>
  );
};