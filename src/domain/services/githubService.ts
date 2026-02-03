import { ENV } from '@/config/env';
import api from '@/services/api/api';
import type { GitHubRepo } from '@/domain/entities/github';

export const GithubService = {
    getRepos: async (username: string): Promise<GitHubRepo[]> => {
        const url = `${ENV.GITHUB_API_URL}/users/${username}/repos`;
        return await api.get<GitHubRepo[]>(url, {
            sort: 'updated',
            per_page: '5',
        });
    }
};