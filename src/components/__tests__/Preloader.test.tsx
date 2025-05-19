import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Preloader } from "../Preloader";

describe("Preloader Component", () => {
  it("renders without crashing", () => {
    render(<Preloader load />);
  });
});
