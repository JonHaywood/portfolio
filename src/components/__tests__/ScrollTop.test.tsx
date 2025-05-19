import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { ScrollToTop } from "../ScrollTop";
import { vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  useLocation: vi.fn(() => ({ pathname: "/test-path" })),
}));

describe("ScrollTop Component", () => {
  it("renders without crashing", () => {
    render(<ScrollToTop />);
  });
});
