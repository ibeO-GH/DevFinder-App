import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSearch(input.trim());
  };

  return (
    <div className="max-w-xl mx-auto flex items-center bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
      <input
        type="text"
        placeholder="Search GitHub username (e.g. torvalds)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1 px-4 py-3 outline-none text-gray-700"
        autoFocus
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 flex items-center gap-2 transition"
      >
        <FiSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
