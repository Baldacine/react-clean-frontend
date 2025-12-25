import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
});

export const getGithubRepos = async (username: string) => {
    const { data } = await api.get(`/users/${username}/repos?sort=updated&per_page=5`);
    return data;
};