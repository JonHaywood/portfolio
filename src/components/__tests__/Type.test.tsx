import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Type } from "../Type";

describe("Type Component", () => {
  it("renders without crashing", () => {
    render(<Type strings={["test"]} />);
  });
});
