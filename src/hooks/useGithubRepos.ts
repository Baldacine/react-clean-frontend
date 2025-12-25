import { useQuery } from '@tanstack/react-query';
import { getGithubRepos } from '@/services/api/github';
import type { GitHubRepo } from '@/@types/github';

export const useGithubRepos = (username: string) => {
    return useQuery<GitHubRepo[], Error>({
        queryKey: ['github-repos', username],
        queryFn: () => getGithubRepos(username),
        staleTime: 1000 * 60 * 10,
        enabled: !!username,
    });
};