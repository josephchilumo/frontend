import React, { useState, useEffect } from "react";
import axios from "axios";

// Simple modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

const Team = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [modalMember, setModalMember] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    specialty: "",
    bio: "",
    awards: "",
    featured: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch members
  const fetchMembers = async () => {
    try {
      const res = await axios.get("/api/team");
      setMembers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Form handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      for (const key in formData) data.append(key, formData[key]);
      if (imageFile) data.append("image", imageFile);

      if (editingID) {
        await axios.put(`/api/team/${editingID}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("/api/team", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchMembers();
      resetForm();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", title: "", specialty: "", bio: "", awards: "", featured: false });
    setImageFile(null);
    setPreviewImage(null);
    setEditingID(null);
    setShowForm(false);
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      title: member.title,
      specialty: member.specialty,
      bio: member.bio,
      awards: member.awards.join(","),
      featured: member.featured,
    });
    setPreviewImage(member.image);
    setEditingID(member._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;
    try {
      await axios.delete(`/api/team/${id}`);
      fetchMembers();
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered members based on search
  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Team Management</h1>

      {/* Search + Add button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name, title, specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Member"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="specialty"
              placeholder="Specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded"
            />
          </div>

          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="awards"
            placeholder="Awards (comma-separated)"
            value={formData.awards}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="w-24 h-24 object-cover rounded" />
          )}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            Featured
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {loading ? "Saving..." : editingID ? "Update Member" : "Add Member"}
          </button>
        </form>
      )}

      {/* Team Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Specialty</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No members found
                </td>
              </tr>
            ) : (
              filtered.map((m) => (
                <tr key={m._id} className="hover:bg-gray-50 cursor-pointer">
                  <td
                    className="px-4 py-2"
                    onClick={() => setModalMember(m)}
                  >
                    {m.name}
                  </td>
                  <td
                    className="px-4 py-2"
                    onClick={() => setModalMember(m)}
                  >
                    {m.title}
                  </td>
                  <td
                    className="px-4 py-2"
                    onClick={() => setModalMember(m)}
                  >
                    {m.specialty}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdit(m)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for full details */}
      <Modal isOpen={!!modalMember} onClose={() => setModalMember(null)}>
        {modalMember && (
          <div className="space-y-2">
            <img
              src={modalMember.image}
              alt={modalMember.name}
              className="w-32 h-32 object-cover rounded"
            />
            <h2 className="text-xl font-bold">{modalMember.name}</h2>
            <p>
              <strong>Title:</strong> {modalMember.title}
            </p>
            <p>
              <strong>Specialty:</strong> {modalMember.specialty}
            </p>
            <p>
              <strong>Bio:</strong> {modalMember.bio}
            </p>
            {modalMember.awards.length > 0 && (
              <p>
                <strong>Awards:</strong> {modalMember.awards.join(", ")}
              </p>
            )}
            <p>
              <strong>Featured:</strong> {modalMember.featured ? "Yes" : "No"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Team;