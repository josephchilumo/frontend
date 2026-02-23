import React, { useState, useEffect } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    mapUrl: "",
  });

  // ✅ Load from localStorage on first render
  useEffect(() => {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  // ✅ Save to localStorage whenever locations change
  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = {
      id: Date.now(),
      ...formData,
    };

    setLocations((prev) => [...prev, newLocation]);

    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
      mapUrl: "",
    });

    setShowForm(false);
  };

  const deleteLocation = (id) => {
    setLocations((prev) => prev.filter((location) => location.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Locations</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="px-6 py-2 bg-[#C6A75E] text-gray-900 rounded shadow"
      >
        {showForm ? "Close Form" : "Add New Location"}
      </button>

      {/* ✅ Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Location Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="mapUrl"
            placeholder="Google Map Embed URL"
            value={formData.mapUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Save Location
          </button>
        </form>
      )}

      {/* ✅ Table */}
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Address</th>
            <th className="px-6 py-3 text-left">Phone</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Map</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {locations.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-6 text-gray-500"
              >
                No locations added yet.
              </td>
            </tr>
          ) : (
            locations.map((location) => (
              <tr
                key={location.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-3">{location.name}</td>
                <td className="px-6 py-3">{location.address}</td>
                <td className="px-6 py-3">{location.phone}</td>
                <td className="px-6 py-3">{location.email}</td>
                <td className="px-6 py-3">
                  {location.mapUrl ? (
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Map
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => deleteLocation(location.id)}
                    className="text-red-600 hover:underline"
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

export default Locations;