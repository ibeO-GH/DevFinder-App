import { useState } from "react";
import { getUser, getRepos } from "../services/github";
import type { GitHubUser, Repo } from "../types/github";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";

const Home = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username: string) => {
    try {
      setLoading(true);
      setError("");

      const userData = await getUser(username);
      const repoData = await getRepos(username);

      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError(
        "We couldn't find that user. Please check the username and try again.",
      );
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-10">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
        DevFinder
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Discover GitHub developers and explore their repositories
      </p>

      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={handleSearch} />

        <div className="mt-6">
          {loading && <LoadingSkeleton />}

          {error && <ErrorState message={error} />}

          {user && <UserCard user={user} />}
        </div>

        {repos.length > 0 && (
          <div className="mt-6">
            <RepoList repos={repos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
