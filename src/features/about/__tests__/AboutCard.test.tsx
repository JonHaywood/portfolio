import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { AboutCard } from "../AboutCard";

describe("AboutCard Component", () => {
  it("renders without crashing", () => {
    render(<AboutCard />);
  });
});
