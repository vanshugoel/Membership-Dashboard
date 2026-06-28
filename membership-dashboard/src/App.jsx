import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/NavBar";
import DashboardCards from "./components/DashboardCards";
import MemberList from "./components/MemberList";
import SearchBar from "./components/SearchBar";
import AddMember from "./components/AddMember";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/members");
      const data = await res.json();

      setMembers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (member) => {
    setMemberToDelete(member);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/members/${memberToDelete._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete member");
      }

      toast.success("Member deleted successfully!");

      await fetchMembers();

      setDeleteModalOpen(false);
      setMemberToDelete(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete member!");
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase())
  );

  const latestMembers = filteredMembers.slice(0, 10);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          <p className="text-slate-300 text-lg">
            Loading members...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12">

        {search.trim() === "" && <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>}

        <div className="my-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {search.trim() === "" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              + Add Member
            </button>
          )}
        </div>

        {search.trim() === "" && (
          <DashboardCards members={members} />
        )}

        <MemberList
          members={latestMembers}
          onDelete={openDeleteModal}
          onEdit={handleEdit}
          search={search}
        />

        <AddMember
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingMember(null);
          }}
          fetchMembers={fetchMembers}
          editingMember={editingMember}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setMemberToDelete(null);
          }}
          onConfirm={handleDelete}
          member={memberToDelete}
        />
      </div>
    </div>
  );
}

export default App;