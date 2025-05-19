import { describe, it, beforeAll, vi } from "vitest";
import { render } from "@testing-library/react";
import { NavBar } from "../NavBar";

beforeAll(() => {
  Object.defineProperty(window, "scrollTo", {
    value: vi.fn(),
    writable: true,
  });
});

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("NavBar Component", () => {
  it("renders without crashing", () => {
    render(<NavBar />);
  });
});
