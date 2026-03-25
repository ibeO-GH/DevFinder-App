import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition"
    >
      <FiSearch className="text-gray-400 text-xl mr-3" />
      <input
        type="text"
        placeholder="Search GitHub username (e.g. torvalds)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
