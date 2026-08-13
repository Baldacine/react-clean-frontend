import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../test/test-utils";
import { GithubStats } from "@/features/portfolio/components/GithubStats";

vi.mock("@/features/portfolio/hooks/useGithubRepos", () => ({
  useGithubRepos: () => ({
    data: [
      {
        id: 1,
        name: "react-clean-frontend",
        description: "Architecture portfolio",
        html_url: "https://github.com/Baldacine/react-clean-frontend",
        stargazers_count: 1,
        forks_count: 0,
        language: "TypeScript",
        updated_at: "2026-08-13T00:00:00Z",
      },
      {
        id: 2,
        name: "webpink",
        description: "Excluded repository",
        html_url: "https://github.com/Baldacine/webpink",
        stargazers_count: 0,
        forks_count: 0,
        language: "JavaScript",
        updated_at: "2026-08-12T00:00:00Z",
      },
      {
        id: 3,
        name: "wepink",
        description: "Excluded repository with alternate spelling",
        html_url: "https://github.com/Baldacine/wepink",
        stargazers_count: 0,
        forks_count: 0,
        language: "TypeScript",
        updated_at: "2026-08-11T00:00:00Z",
      },
    ],
    isLoading: false,
    isError: false,
    refetch: vi.fn(),
  }),
}));

describe("GithubStats", () => {
  it("renders repository cards as links and omits excluded repositories", () => {
    render(<GithubStats />);

    expect(
      screen.getByRole("link", { name: /react-clean-frontend/i }),
    ).toHaveAttribute(
      "href",
      "https://github.com/Baldacine/react-clean-frontend",
    );
    expect(screen.queryByText("webpink")).not.toBeInTheDocument();
    expect(screen.queryByText("wepink")).not.toBeInTheDocument();
  });
});
