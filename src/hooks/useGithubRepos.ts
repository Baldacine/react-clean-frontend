import { GithubService } from '@/domain/services/githubService';
import { useQuery } from '@tanstack/react-query';

export const useGithubRepos = (username: string) => {
    return useQuery({
        queryKey: ['github-repos', username],
        queryFn: () => GithubService.getRepos(username),
        enabled: !!username,
        staleTime: 1000 * 60 * 5,
    });
};