import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-96">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" />

      <input
        type="text"
        placeholder="Search Members"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500 transition-colors"
      />

    </div>
  );
}

export default SearchBar;