import { useEffect, useState } from "react";
import axios from "axios";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewingPub, setViewingPub] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
  });

  const [pdfFile, setPdfFile] = useState(null);

  /* ---------------- FETCH ---------------- */
  const fetchPublications = async () => {
    const res = await axios.get("/api/publications");
    setPublications(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  /* ---------------- AUTO SLUG ---------------- */
  useEffect(() => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-");
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title]);

  /* ---------------- SEARCH + FILTER ---------------- */
  useEffect(() => {
    let result = publications;

    if (search)
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );

    if (categoryFilter)
      result = result.filter(p => p.category === categoryFilter);

    setFiltered(result);
  }, [search, categoryFilter, publications]);

  /* ---------------- FORM CHANGE ---------------- */
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key =>
      data.append(key, formData[key])
    );
    if (pdfFile) data.append("pdf", pdfFile);

    setLoading(true);

    try {
      if (editingId) {
        await axios.put(`/api/publications/${editingId}`, data);
      } else {
        await axios.post("/api/publications", data);
      }

      resetForm();
      fetchPublications();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  /* ---------------- RESET FORM ---------------- */
  const resetForm = () => {
    setEditingId(null);
    setShowForm(false);
    setFormData({
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      content: "",
    });
    setPdfFile(null);
  };

  /* ---------------- EDIT ---------------- */
  const handleEdit = pub => {
    setFormData({
      title: pub.title,
      slug: pub.slug,
      category: pub.category,
      excerpt: pub.excerpt,
      content: pub.content.join("\n"),
    });
    setEditingId(pub._id);
    setShowForm(true);
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async id => {
    if (!window.confirm("Delete this publication?")) return;
    await axios.delete(`/api/publications/${id}`);
    fetchPublications();
  };

  /* ---------------- VIEW ---------------- */
  const handleView = pub => {
    setViewingPub(pub);
  };

  const closeModal = () => {
    setViewingPub(null);
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Publications</h1>

      {/* SEARCH & FILTER */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-3 rounded flex-1"
        />
        <input
          type="text"
          placeholder="Filter by category..."
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="border p-3 rounded flex-1"
        />

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#C6A75E] px-6 py-2 rounded text-white font-semibold"
        >
          {showForm ? "Close Form" : "Add Publication"}
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="border p-3 rounded w-full"
            />

            <input
              name="slug"
              value={formData.slug}
              readOnly
              className="border p-3 rounded w-full bg-gray-100"
            />

            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="border p-3 rounded w-full"
            />

            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Excerpt"
              className="border p-3 rounded w-full"
            />

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Full content"
              rows={6}
              className="border p-3 rounded w-full"
            />

            <input
              type="file"
              accept="application/pdf"
              onChange={e => setPdfFile(e.target.files[0])}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 px-6 py-2 rounded text-white"
            >
              {editingId ? "Update" : "Create"}
            </button>
          </form>
        </div>
      )}

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(pub => (
          <div
            key={pub._id}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{pub.title}</h2>

            {pub.category && (
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {pub.category}
              </span>
            )}

            {pub.excerpt && (
              <p className="text-gray-600 mt-2">{pub.excerpt}</p>
            )}

            <div className="mt-4 space-x-4">
              <button
                onClick={() => handleView(pub)}
                className="text-blue-600 font-semibold"
              >
                View
              </button>

              <button
                onClick={() => handleEdit(pub)}
                className="text-green-600 font-semibold"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(pub._id)}
                className="text-red-600 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MODAL */}
      {viewingPub && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {viewingPub.title}
            </h2>

            {viewingPub.category && (
              <p className="text-sm text-gray-500 mb-2">
                Category: {viewingPub.category}
              </p>
            )}

            <p className="whitespace-pre-line text-gray-700">
              {viewingPub.content.join("\n")}
            </p>

            {viewingPub.pdf && (
              <a
                href={viewingPub.pdf}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-blue-600 underline"
              >
                View Attached PDF
              </a>
            )}

            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-gray-200 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;