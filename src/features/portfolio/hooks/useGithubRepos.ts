import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/services/github/githubService";

export const useGithubRepos = (username: string) =>
  useQuery({
    queryKey: ["github-repos", username],
    queryFn: () => githubService.getRepos(username),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 5,
  });
