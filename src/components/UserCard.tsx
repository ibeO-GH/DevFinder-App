import type { GitHubUser } from "../types/github";

const UserCard = ({ user }: { user: GitHubUser }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border"
        />

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-800">
            {user.name || user.login}
          </h2>

          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            @{user.login}
          </a>

          <p className="text-gray-600 mt-2 text-sm">
            {user.bio || "No bio available"}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6 bg-gray-50 rounded-lg p-4 text-center">
        <div>
          <p className="text-lg font-bold text-gray-800">{user.public_repos}</p>
          <p className="text-sm text-gray-500">Repos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">{user.followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">{user.following}</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
