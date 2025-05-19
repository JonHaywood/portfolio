import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Techstack } from "../Techstack";

describe("Techstack Component", () => {
  it("renders without crashing", () => {
    render(<Techstack />);
  });
});
