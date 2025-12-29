import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../test/test-utils";
import { Portfolio } from "@/features/portfolio/page";

describe("Portfolio Page", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the profile header information correctly", () => {
    render(<Portfolio />);

    expect(screen.getByText("Wanderson Baldacine")).toBeInTheDocument();
    expect(screen.getByText("portfolio.description")).toBeInTheDocument();
    const avatar = screen.getByAltText("Wanderson Baldacine");
    expect(avatar).toBeInTheDocument();
  });

  it("should render all six navigation cards", () => {
    render(<Portfolio />);

    const sections = [
      "TechStack",
      "Journey",
      "Certifications",
      "Projects",
      "Awards",
      "Hobbies",
    ];

    sections.forEach((section) => {
      expect(
        screen.getByText(`portfolio.sections.${section}`)
      ).toBeInTheDocument();
    });
  });

  it("should open the modal when a section card is clicked", async () => {
    render(<Portfolio />);

    const TechStackCard = screen.getByText("portfolio.sections.TechStack");
    fireEvent.click(TechStackCard);

    await waitFor(() => {
      const modalTitles = screen.getAllByText("portfolio.sections.TechStack");
      expect(modalTitles.length).toBeGreaterThan(1);
      expect(screen.getByText("portfolio.modal.close")).toBeInTheDocument();
    });
  });

  it("should call window.open when social buttons are clicked", () => {
    const windowSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Portfolio />);
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);
    expect(windowSpy).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/wandersonbaldacine",
      "_blank"
    );

    fireEvent.click(buttons[2]);
    expect(windowSpy).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/wandersonbaldacine",
      "_blank"
    );
  });

  it("should close the modal when the close button is clicked", async () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText("portfolio.sections.Awards"));

    await waitFor(() => {
      const closeBtn = screen.getByText("portfolio.modal.close");
      fireEvent.click(closeBtn);
    });

    await waitFor(() => {
      expect(
        screen.queryByText("portfolio.modal.close")
      ).not.toBeInTheDocument();
    });
  });
});
