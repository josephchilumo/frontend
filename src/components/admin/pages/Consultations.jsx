import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/consultations";

const Consultations = () => {
  const [consultations, setConsultations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [noteText, setNoteText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [responseMethod, setResponseMethod] = useState("Email");

  const selected = consultations.find((c) => c._id === selectedId);

  /* ==============================
     FETCH CONSULTATIONS
  ================================= */
  const fetchConsultations = async () => {
    try {
      const { data } = await axios.get(API);
      setConsultations(data);
    } catch (error) {
      console.error("Error fetching consultations:", error);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  /* ==============================
     UPDATE CONSULTATION
  ================================= */
  const updateConsultation = async (id, updatedFields) => {
    try {
      const { data } = await axios.put(`${API}/${id}`, updatedFields);
      setConsultations((prev) =>
        prev.map((c) => (c._id === id ? data : c))
      );
    } catch (error) {
      console.error(error);
    }
  };

  /* ==============================
     ADD NOTE
  ================================= */
  const addNote = async () => {
    if (!noteText) return;

    try {
      const { data } = await axios.post(
        `${API}/${selectedId}/notes`,
        { text: noteText }
      );

      setConsultations((prev) =>
        prev.map((c) => (c._id === selectedId ? data : c))
      );

      setNoteText("");
    } catch (error) {
      console.error(error);
    }
  };

  /* ==============================
     ADD RESPONSE
  ================================= */
  const addResponse = async () => {
    if (!responseText) return;

    try {
      const { data } = await axios.post(
        `${API}/${selectedId}/responses`,
        {
          method: responseMethod,
          text: responseText,
        }
      );

      setConsultations((prev) =>
        prev.map((c) => (c._id === selectedId ? data : c))
      );

      setResponseText("");
    } catch (error) {
      console.error(error);
    }
  };

  /* ==============================
     DELETE
  ================================= */
  const deleteConsultation = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setConsultations((prev) => prev.filter((c) => c._id !== id));
      setSelectedId(null);
    } catch (error) {
      console.error(error);
    }
  };

  /* ==============================
     FILTERING
  ================================= */
  const filteredConsultations = consultations.filter((c) => {
    const matchesStatus = filter === "All" || c.status === filter;
    const matchesSearch =
      c.clientName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Consultation Management</h1>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Review</option>
          <option>Scheduled</option>
          <option>Responded</option>
          <option>Closed</option>
        </select>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredConsultations.map((c) => (
          <div
            key={c._id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{c.clientName}</h2>
              <p className="text-sm text-gray-600">{c.service}</p>
              <p className="text-xs text-gray-500">{c.status}</p>
            </div>

            <button
              onClick={() => setSelectedId(c._id)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-3/4 max-h-[90vh] overflow-y-auto p-6 rounded-lg">

            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">
                {selected.clientName}
              </h2>
              <button
                onClick={() => setSelectedId(null)}
                className="text-red-600"
              >
                Close
              </button>
            </div>

            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Phone:</strong> {selected.phone}</p>
            <p><strong>Service:</strong> {selected.service}</p>
            <p className="mt-3"><strong>Message:</strong> {selected.message}</p>

            {/* Assign Lawyer */}
            <div className="mt-4">
              <label className="font-semibold">Assign Lawyer</label>
              <input
                type="text"
                className="border p-2 w-full mt-1"
                value={selected.assignedLawyer || ""}
                onChange={(e) =>
                  updateConsultation(selected._id, {
                    assignedLawyer: e.target.value,
                  })
                }
              />
            </div>

            {/* Status */}
            <div className="mt-4">
              <label className="font-semibold">Status</label>
              <select
                className="border p-2 w-full mt-1"
                value={selected.status}
                onChange={(e) =>
                  updateConsultation(selected._id, {
                    status: e.target.value,
                  })
                }
              >
                <option>Pending</option>
                <option>In Review</option>
                <option>Scheduled</option>
                <option>Responded</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Notes */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Internal Notes</h3>

              <textarea
                className="border w-full p-2"
                placeholder="Add note..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />

              <button
                onClick={addNote}
                className="mt-2 bg-gray-800 text-white px-3 py-1 rounded"
              >
                Save Note
              </button>

              {selected.internalNotes?.map((note, index) => (
                <div key={index} className="bg-gray-100 p-2 mt-2 rounded">
                  <p className="text-sm">{note.text}</p>
                  <p className="text-xs text-gray-500">{note.date}</p>
                </div>
              ))}
            </div>

            {/* Responses */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Respond to Client</h3>

              <select
                className="border p-2 w-full mb-2"
                value={responseMethod}
                onChange={(e) => setResponseMethod(e.target.value)}
              >
                <option>Email</option>
                <option>Call</option>
                <option>SMS</option>
              </select>

              <textarea
                className="border w-full p-2"
                placeholder="Write response..."
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
              />

              <button
                onClick={addResponse}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
              >
                Send Response
              </button>

              {selected.responses?.map((res, index) => (
                <div key={index} className="bg-green-50 p-2 mt-2 rounded">
                  <p className="text-sm">
                    <strong>{res.method}:</strong> {res.text}
                  </p>
                  <p className="text-xs text-gray-500">{res.date}</p>
                </div>
              ))}
            </div>

            {/* Delete */}
            <button
              onClick={() => deleteConsultation(selected._id)}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Consultation
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Consultations;