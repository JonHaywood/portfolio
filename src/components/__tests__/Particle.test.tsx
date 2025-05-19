import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Particle } from "../Particle";

describe("Particle Component", () => {
  it("renders without crashing", () => {
    render(<Particle />);
  });
});
