import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Toolstack } from "../Toolstack";

describe("Toolstack Component", () => {
  it("renders without crashing", () => {
    render(<Toolstack />);
  });
});
