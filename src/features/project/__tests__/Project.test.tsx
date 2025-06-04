import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Project } from "../Project";

describe("Project Component", () => {
  it("renders without crashing", () => {
    render(<Project />);
  });
}); 