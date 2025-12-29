import type { GitHubRepo } from '@/@types/github';
import api from './api/api';
import { ENV } from '@/config/env';

export const GithubService = {
    getRepos: async (username: string): Promise<GitHubRepo[]> => {
        const url = `${ENV.GITHUB_API_URL}/users/${username}/repos`;
        return await api.get<GitHubRepo[]>(url, {
            sort: 'updated',
            per_page: '5',
        });
    }
};