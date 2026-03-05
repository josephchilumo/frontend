import { useState, useEffect } from "react";
import axios from "axios";

const Hr = () => {
  const [applicants, setApplicants] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [newVacancy, setNewVacancy] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
  });

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const canEdit = ["hr", "admin"].includes(user?.role);

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  const API_APPLICANTS = "http://localhost:5000/api/applicants";
  const API_VAC = "http://localhost:5000/api/vacancies";

  /* FETCH DATA */
  useEffect(() => {
    if (canEdit) {
      fetchApplicants();
      fetchVacancies();
    }
  }, [canEdit]);

  const fetchApplicants = async () => {
    try {
      const { data } = await axios.get(API_APPLICANTS, config);
      setApplicants(data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const fetchVacancies = async () => {
    try {
      const { data } = await axios.get(API_VAC, config);
      setVacancies(data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  /* UPDATE STATUS */
  const updateStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `${API_APPLICANTS}/${id}/status`,
        { status },
        config
      );
      setApplicants((prev) =>
        prev.map((app) => (app._id === id ? data : app))
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  /* CREATE VACANCY */
  const createVacancy = async () => {
    if (!newVacancy.title || !newVacancy.description || !newVacancy.location) {
      alert("Title, Description, and Location are required!");
      return;
    }
    try {
      await axios.post(API_VAC, newVacancy, config);
      setNewVacancy({ title: "", description: "", requirements: "", location: "" });
      fetchVacancies();
    } catch (error) {
      console.error("Error creating vacancy:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>

      {/* APPLICANTS TABLE */}
      <h2 className="text-xl font-semibold mb-4">Job Applications</h2>
      <table className="w-full border text-center mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Resume</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((app) => (
            <tr key={app._id} className="border-t">
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.position}</td>
              <td>
                {app.resumeUrl ? (
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <select
                  value={app.status}
                  onChange={(e) => updateStatus(app._id, e.target.value)}
                  className="border p-1"
                  disabled={!canEdit}
                >
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="rejected">Rejected</option>
                  <option value="hired">Hired</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE VACANCY */}
      <h2 className="text-xl font-semibold mb-4">Add Vacancy</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Title"
          className="border p-2"
          value={newVacancy.title}
          onChange={(e) => setNewVacancy({ ...newVacancy, title: e.target.value })}
          disabled={!canEdit}
        />
        <input
          placeholder="Location"
          className="border p-2"
          value={newVacancy.location}
          onChange={(e) => setNewVacancy({ ...newVacancy, location: e.target.value })}
          disabled={!canEdit}
        />
        <textarea
          placeholder="Description"
          className="border p-2"
          value={newVacancy.description}
          onChange={(e) => setNewVacancy({ ...newVacancy, description: e.target.value })}
          disabled={!canEdit}
        />
        <textarea
          placeholder="Requirements"
          className="border p-2"
          value={newVacancy.requirements}
          onChange={(e) => setNewVacancy({ ...newVacancy, requirements: e.target.value })}
          disabled={!canEdit}
        />
      </div>

      <button
        onClick={createVacancy}
        className={`mt-4 px-4 py-2 rounded text-white ${
          canEdit ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!canEdit}
      >
        Create Vacancy
      </button>

      {/* VACANCY LIST */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Active Vacancies</h2>
      {vacancies.map((vac) => (
        <div key={vac._id} className="border p-4 rounded mb-4">
          <h3 className="font-bold">{vac.title}</h3>
          <p>{vac.description}</p>
          <p className="text-sm text-gray-600">{vac.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Hr;