import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { ProjectCard } from "../ProjectCard";

describe("ProjectCard Component", () => {
  it("renders without crashing", () => {
    render(
      <ProjectCard
        imgPath=""
        title="Test Project"
        description="This is a test project."
        demoLink="https://example.com/demo"
        ghLink="https://github.com/example/test-project"
      />
    );
  });
});
