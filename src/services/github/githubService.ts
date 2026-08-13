import { ENV } from "@/config/env";
import type { GitHubRepo } from "@/domain/entities/github";
import { externalApi } from "@/services/api/api";

export const githubService = {
  getRepos: async (username: string): Promise<GitHubRepo[]> => {
    const response = await externalApi.get<GitHubRepo[]>(
      `${ENV.GITHUB_API_URL}/users/${username}/repos`,
      {
        params: {
          sort: "updated",
          per_page: 5,
        },
      },
    );

    return response.data;
  },
};
