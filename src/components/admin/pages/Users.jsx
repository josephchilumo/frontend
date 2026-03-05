import React from "react";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Joseph Mbwana",
      email: "joseph@email.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Amina Hassan",
      email: "amina@email.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Brian Otieno",
      email: "brian@email.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users Management</h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{user.id}</td>
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;