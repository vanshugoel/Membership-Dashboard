import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiChevronDown } from "react-icons/fi";

function AddMember({
  isOpen,
  onClose,
  fetchMembers,
  editingMember,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    membershipType: "Gold",
    membershipFee: 1500,
    status: "Active",
  });

  useEffect(() => {
    if (editingMember) {
      setFormData({
        name: editingMember.name,
        email: editingMember.email,
        membershipType: editingMember.membershipType,
        membershipFee: editingMember.membershipFee,
        status: editingMember.status,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        membershipType: "Gold",
        membershipFee: 1500,
        status: "Active",
      });
    }
  }, [editingMember]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "membershipType") {
      const prices = {
        Basic: 500,
        Silver: 1000,
        Gold: 1500,
        Platinum: 2500,
      };

      setFormData({
        ...formData,
        membershipType: value,
        membershipFee: prices[value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const url = editingMember
        ? `http://localhost:5000/api/members/${editingMember._id}`
        : "http://localhost:5000/api/members";

      const method = editingMember ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      await fetchMembers();

      if (editingMember) {
        toast.success("Member updated successfully!");
      } else {
        toast.success("Member added successfully!");
      }

      setFormData({
        name: "",
        email: "",
        membershipType: "Gold",
        membershipFee: 1500,
        status: "Active",
      });

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Operation failed!");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 w-[450px] border border-slate-300 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-6">
          {editingMember ? "Edit Member" : "Add Member"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
            
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="relative">
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-3 pr-12 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Basic">Basic</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>

            <FiChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>

          <input
            type="number"
            value={formData.membershipFee}
            readOnly
            className="w-full bg-slate-50 border border-slate-300 dark:border-slate-700rounded-lg p-3"
          />

          <div className="relative">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-3 pr-12 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </select>

            <FiChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              {editingMember ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMember;