import { Col, Container, Row } from "react-bootstrap";
import { Particle } from "@/components/Particle";
import { ProjectCard } from "./ProjectCard";
import realTimeAudio from "@/assets/projects/realtime-audio.webp";
import gptAssistant from "@/assets/projects/gpt-assistant.webp";
import gamesAI from "@/assets/projects/games-ai.webp";

export const Project = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Playground</strong>
        </h1>
        <p className="white-text">
          Explore my side projects, small apps and scripts that fuel my passion
          for code.
        </p>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realTimeAudio}
              title="OpenAI Realtime Audio"
              description="This project demonstrates how to use OpenAI's new Realtime API beta with audio streaming. When the user speaks, their audio is streamed to Open AI and Open AI's audio response is streamed back to the client."
              ghLink="https://github.com/JonHaywood/openai-realtime-demo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gptAssistant}
              title="GPT-Assistant"
              description="GPT-Assistant your own personal Siri, your own 'OK Google', a Typescript, Node.js-based digital home assistant built to run on a Raspberry Pi."
              ghLink="https://github.com/JonHaywood/gpt-assistant"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamesAI}
              title="Games.AI"
              description="A C# machine learning library to solve simple games and puzzles. This is a library made (mostly) for fun. It's a C# library that contains machine learning algorithms that solve a handful of different types of games."
              ghLink="https://github.com/JonHaywood/Games.AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};