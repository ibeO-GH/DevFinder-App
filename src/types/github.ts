export type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
};
