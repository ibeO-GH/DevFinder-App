import axios from "axios";

const API = "https://api.github.com";

export const getUser = async (username: string) => {
  const res = await axios.get(`${API}/users/${username}`);
  return res.data;
};

export const getRepos = async (username: string) => {
  const res = await axios.get(`${API}/users/${username}/repos`);
  return res.data;
};
