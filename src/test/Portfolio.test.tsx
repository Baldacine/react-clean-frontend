import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../test/test-utils";
import { Portfolio } from "@/features/portfolio/page";

vi.mock("@/features/portfolio/hooks/useGithubRepos", () => ({
  useGithubRepos: () => ({
    data: [],
    isLoading: false,
    isError: false,
    refetch: vi.fn(),
  }),
}));

describe("Portfolio Page", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the profile header information correctly", () => {
    render(<Portfolio />);

    expect(screen.getByText("Wanderson Baldacine")).toBeInTheDocument();
    expect(screen.getByText("portfolio.description")).toBeInTheDocument();
    expect(screen.getByText("portfolio.description_focus")).toBeInTheDocument();
    const avatar = screen.getByAltText("Wanderson Baldacine");
    expect(avatar).toBeInTheDocument();
  });

  it("should render all navigation cards as accessible buttons", () => {
    render(<Portfolio />);

    expect(
      screen.getByRole("region", { name: "portfolio.navigation.label" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("portfolio.navigation.title"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("portfolio.navigation.subtitle"),
    ).not.toBeInTheDocument();

    const sections = [
      "TechStack",
      "Journey",
      "Certifications",
      "Projects",
      "Awards",
    ];

    sections.forEach((section) => {
      expect(
        screen.getByRole("button", {
          name: `portfolio.sections.${section}`,
        }),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText("portfolio.section_descriptions.Projects"),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText("portfolio.navigation.explore"),
    ).toHaveLength(sections.length);
  });

  it("should open the modal when a section card is clicked", async () => {
    render(<Portfolio />);

    const TechStackCard = screen.getByRole("button", {
      name: "portfolio.sections.TechStack",
    });
    fireEvent.click(TechStackCard);

    await waitFor(() => {
      expect(
        screen.getByRole("dialog", {
          name: "portfolio.sections.TechStack",
        }),
      ).toBeInTheDocument();
      expect(screen.getByText("portfolio.modal.close")).toBeInTheDocument();
    });
  });

  it("should open projects from the primary hero action", async () => {
    render(<Portfolio />);

    fireEvent.click(
      screen.getByRole("button", { name: "portfolio.hero.view_projects" }),
    );

    await waitFor(() => {
      expect(
        screen.getByRole("dialog", {
          name: "portfolio.sections.Projects",
        }),
      ).toBeInTheDocument();
    });
  });

  it("should expose accessible social actions and open external profiles safely", () => {
    const windowSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Portfolio />);

    fireEvent.click(
      screen.getByRole("button", { name: "portfolio.hero.linkedin" }),
    );
    expect(windowSpy).toHaveBeenNthCalledWith(
      1,
      "https://www.linkedin.com/in/wandersonbaldacine",
      "_blank",
      "noopener,noreferrer",
    );

    expect(
      screen.getByRole("button", { name: "portfolio.social.email" }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "portfolio.social.github" }),
    );
    expect(windowSpy).toHaveBeenNthCalledWith(
      2,
      "https://github.com/Baldacine/react-clean-frontend",
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("should close the modal with Escape and restore focus", async () => {
    render(<Portfolio />);

    const awardsButton = screen.getByRole("button", {
      name: "portfolio.sections.Awards",
    });
    awardsButton.focus();
    fireEvent.click(awardsButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "portfolio.modal.closeLabel" }),
      ).toHaveFocus();
    });

    fireEvent.keyDown(
      screen.getByRole("dialog", { name: "portfolio.sections.Awards" }),
      { key: "Escape" },
    );

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: "portfolio.sections.Awards" }),
      ).not.toBeInTheDocument();
      expect(awardsButton).toHaveFocus();
    });
  });
});
