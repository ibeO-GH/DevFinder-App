import type { Repo } from "../types/github";

const RepoList = ({ repos }: { repos: Repo[] }) => {
  if (repos.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-8 text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <p className="text-gray-600">This user has no public repositories.</p>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Repositories</h3>

      <div className="space-y-3 max-h-[400px] overflow-y-auto scroll-smooth pr-2">
        {repos.slice(0, 10).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="block bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hovver:-translate-y-1 transition"
          >
            <p className="font-medium text-blue-600">{repo.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
