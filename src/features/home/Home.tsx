// React and Components
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Particle } from "@/components/Particle";
import { Type } from "@/components/Type";
import homeLogo from "@/assets/home-main.webp";
import myImg from "@/assets/avatar.webp";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JON HAYWOOD</strong>
              </h1>

              <div className="type-wrapper">
                <Type
                  strings={[
                    "Senior Web Developer",
                    "Full Stack Engineer",
                    "AI Enthusiast",
                    "Open Source Contributor",
                  ]}
                />
              </div>
            </Col>

            <Col md={5} className="home-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 className="home-about-heading">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I've been writing code for over{" "}
                <b className="purple">15 years</b>, and I love learning new
                things, <b className="purple">solving hard problems</b> and
                building <i>awesome software</i>.
                <br />
                <br />
                I'm an <b className="purple">expert</b> in{" "}
                <i>
                  <b className="purple">JavaScript</b>,{" "}
                  <b className="purple">TypeScript</b>,{" "}
                  <b className="purple">C#</b> and{" "}
                  <b className="purple">Python</b>
                </i>
                .
                <br />
                <br />I enjoy crafting{" "}
                <i>
                  <b className="purple">cloud-based web apps</b>
                </i>{" "}
                and exploring how <b className="purple">generative AI</b> can
                make everyday tools smarter.
                <br />
                <br />
                You'll often find me building apps with{" "}
                <b className="purple">React & Vite</b> or with frameworks
                <br />
                like <b className="purple">Next.js</b> and creating awesome
                interfaces with{" "}
                <i>
                  <b className="purple">Shadcn + Tailwind CSS</b> or{" "}
                  <b className="purple">Material UI</b>
                </i>{" "}
                that're running on <b className="purple">serverless setups</b>{" "}
                to keep things fast and flexible.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid avatar-image"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/JonHaywood"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jonathanhaywood/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:jonathan.haywood@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}