import { describe, it, vi, expect, beforeEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

let lastPageProps: any = {};
vi.mock('react-pdf', () => ({
  Document: (props: any) => <div>{props.children}</div>,
  Page: (props: any) => {
    lastPageProps = props;
    return <div>PDF Page</div>;
  },
  pdfjs: { GlobalWorkerOptions: { workerSrc: '' } }
}));
vi.mock("@/assets/pdfs/JonathanHaywoodResume.pdf?url", () => ({ default: 'mocked-pdf-url' }));

import { Resume } from "../Resume";

describe("Resume Component", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(<Resume />);
  });

  it("renders two download buttons with correct href and text", () => {
    const { getAllByRole } = render(<Resume />);
    const buttons = getAllByRole('button');
    // There should be two buttons
    expect(buttons.length).toBe(2);
    // Both buttons should have the correct href and text content
    buttons.forEach(btn => {
      expect(btn.getAttribute('href')).toBe('mocked-pdf-url');
      expect(btn.textContent && btn.textContent.toLowerCase()).toContain('download cv');
    });
  });

  it("renders the PDF page", () => {
    const { container } = render(<Resume />);
    // Since Page is mocked, look for the text 'PDF Page'
    const pdfPage = Array.from(container.querySelectorAll('*')).find(
      el => el.textContent === 'PDF Page'
    );
    expect(pdfPage).not.toBeUndefined();
  });

  it("uses correct scale for Page based on width (simulated)", () => {
    // Mock window.innerWidth
    const originalInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
    const { rerender } = render(<Resume />);
    expect(lastPageProps.scale).toBe(1.4);

    // Simulate resize
    window.innerWidth = 700;
    window.dispatchEvent(new Event('resize'));
    rerender(<Resume />);
    expect(lastPageProps.scale).toBe(0.6);

    // Restore
    window.innerWidth = originalInnerWidth;
  });
}); 