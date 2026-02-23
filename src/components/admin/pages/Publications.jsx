import { useState } from "react";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    date: "",
    author: "",
    pdf: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPublication = {
      id: Date.now(),
      ...formData,
      content: formData.content.split("\n"), // converts paragraphs to array
    };

    setPublications(prev => [...prev, newPublication]);

    // reset form
    setFormData({
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      content: "",
      date: "",
      author: "",
      pdf: "",
    });

    setShowForm(false);
  };

  const deletePublication = (id) => {
    setPublications(prev =>
      prev.filter(pub => pub.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Publications</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="px-6 py-2 bg-[#C6A75E] text-gray-900 rounded shadow"
      >
        {showForm ? "Close Form" : "Add New Publication"}
      </button>

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="slug"
            placeholder="Slug (example: property-law-kenya)"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="pdf"
            placeholder="PDF link (/pdfs/file.pdf)"
            value={formData.pdf}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="excerpt"
            placeholder="Short excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="2"
          />

          <textarea
            name="content"
            placeholder="Full content (press Enter for new paragraph)"
            value={formData.content}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="6"
          />

          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Save Publication
          </button>
        </form>
      )}

      {/* TABLE */}
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Date</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {publications.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No publications added yet.
              </td>
            </tr>
          ) : (
            publications.map(pub => (
              <tr key={pub.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{pub.title}</td>
                <td className="px-6 py-3">{pub.category}</td>
                <td className="px-6 py-3">
                  {new Date(pub.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => deletePublication(pub.id)}
                    className="text-red-500"
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
  );
};

export default Publications;