import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../components/admin/pages/Dashboard";
import Publications from "../components/admin/pages/Publications";
import Team from "../components/admin/pages/Team";
import Locations from "../components/admin/pages/Locations";
import Users from "../components/admin/pages/Users";
import Consultations from "../components/admin/pages/Consultations";
import Login from "../components/admin/pages/Login";

function Staff() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="publications" element={<AdminLayout><Publications /></AdminLayout>} />
      <Route path="team" element={<AdminLayout><Team /></AdminLayout>} />
      <Route path="locations" element={<AdminLayout><Locations /></AdminLayout>} />
      <Route path="users" element={<AdminLayout><Users /></AdminLayout>} />
      <Route path="consultations" element={<AdminLayout><Consultations /></AdminLayout>} />

      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}

export default Staff;