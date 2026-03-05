import { useState } from "react";
import axios from "axios";

const ApplicantForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    resumeUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/applicants", form);
      alert("Application submitted!");
      setForm({ name: "", email: "", position: "", resumeUrl: "" });
    } catch (error) {
      alert("Error submitting application");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for a Job</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        placeholder="Resume URL (optional)"
        value={form.resumeUrl}
        onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })}
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Application
      </button>
    </form>
  );
};

export default ApplicantForm;