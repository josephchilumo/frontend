import React from "react";

function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">12</span>
          <p className="text-gray-500 mt-2">Publications</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">8</span>
          <p className="text-gray-500 mt-2">Team Members</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">3</span>
          <p className="text-gray-500 mt-2">Locations</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">5</span>
          <p className="text-gray-500 mt-2">Pending Consultations</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;