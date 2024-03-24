import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API,
});

export default octokit;
