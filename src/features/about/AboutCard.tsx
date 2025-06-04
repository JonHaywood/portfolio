import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello! I'm <span className="purple">Jon Haywood</span>, I work as a{" "}
            <span className="purple">software developer</span> and I am based in
            beautiful <span className="purple">Colorado</span> 🏔️.
            <br />
            <br />I earned my Bachelor's in{" "}
            <span className="purple">Computer Science</span> and I have{" "}
            <span className="purple">20 years</span> of experience building web
            applications for clients in healthcare, oil and natural gas,
            publishing and tech.
            <br />
            <br />
            I'm passionate about solving{" "}
            <span className="purple">complex problems</span> with intuitive,
            user-friendly apps and I'm always experimenting with new
            technologies like <span className="purple">generative AI</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
