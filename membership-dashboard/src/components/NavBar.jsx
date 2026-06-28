import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-start mb-16">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Membership Dashboard
        </h1>

        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-3 max-w-lg">
          Manage memberships and revenue.
        </p>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-md hover:scale-105 transition-all duration-300"
      >
        {darkMode ? (
          <FiSun className="text-yellow-400 text-xl" />
        ) : (
          <FiMoon className="text-slate-700 text-xl" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;