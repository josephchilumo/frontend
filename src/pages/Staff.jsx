import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";

import Login from "../components/admin/pages/Login.jsx";
import Dashboard from "../components/admin/pages/Dashboard";
import Publications from "../components/admin/pages/Publications";
import Team from "../components/admin/pages/Team";
import Locations from "../components/admin/pages/Locations";
import Users from "../components/admin/pages/Users";
import Consultations from "../components/admin/pages/Consultations";
import Hr from "../components/admin/pages/Hr";
import TaskModal from "../components/careers/TaskModal";
import ApplicationModal from "../components/careers/ApplicationModal";

function Staff() {
  return (
    <Routes>
      {/* Public login page */}
      <Route path="login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin", "hr", "editor", "user"]}>
            <AdminLayout><Dashboard /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="publications"
        element={
          <ProtectedRoute allowedRoles={["admin", "editor"]}>
            <AdminLayout><Publications /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="team"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout><Team /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="locations"
        element={
          <ProtectedRoute allowedRoles={["admin", "editor"]}>
            <AdminLayout><Locations /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout><Users /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="consultations"
        element={
          <ProtectedRoute allowedRoles={["admin", "hr", "editor"]}>
            <AdminLayout><Consultations /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="hr"
        element={
          <ProtectedRoute allowedRoles={["hr", "admin"]}>
            <AdminLayout><Hr /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="hr/applications/:id/tasks"
        element={
          <ProtectedRoute allowedRoles={["hr", "admin"]}>
            <AdminLayout><TaskModal /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="hr/apply/:jobId"
        element={
          <ProtectedRoute allowedRoles={["hr", "admin"]}>
            <AdminLayout><ApplicationModal /></AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}

export default Staff;