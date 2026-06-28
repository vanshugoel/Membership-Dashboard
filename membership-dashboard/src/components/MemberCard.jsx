import { useState, useRef, useEffect } from "react";
import { FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";

function MemberCard({ member, onDelete, onEdit }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const statusStyles = {
    Active: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Expired: "bg-red-500/20 text-red-400",
  };

  const membershipStyles = {
    Basic: "bg-slate-700/30 text-blue-800",
    Silver: "bg-gray-400/20 text-black",
    Gold: "bg-yellow-500/20 text-yellow-400",
    Platinum: "bg-purple-500/20 text-purple-400",
  };

  const initials = member.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-start gap-3 min-w-0 flex-1 overflow-hidden">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-base sm:text-lg font-bold shrink-0">
            {initials}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">
              {member.name}
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm truncate">
              {member.email}
            </p>
          </div>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-slate-400 hover:text-white text-xl"
          >
            <FiMoreVertical />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden z-20">
              <button
                onClick={() => {
                  onEdit(member);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                <FiEdit2 />
                Edit
              </button>

              <button
                onClick={() => {
                  onDelete(member);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-600 hover:text-white transition"
              >
                <FiTrash2 />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5 items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            membershipStyles[member.membershipType]
          }`}
        >
          {member.membershipType}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusStyles[member.status]
          }`}
        >
          {member.status}
        </span>
      </div>
    </div>
  );
}

export default MemberCard;