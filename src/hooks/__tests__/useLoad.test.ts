import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useLoad } from "../useLoad";

describe("useLoad hook", () => {
  it("should return true initially and false after 1200ms", async () => {
    const { result } = renderHook(() => useLoad());

    // Initially, the hook should return true
    expect(result.current).toBe(true);

    // Wait for 1200ms and check if the hook returns false
    await act(() => new Promise((resolve) => setTimeout(resolve, 1200)));
    expect(result.current).toBe(false);
  });
});
