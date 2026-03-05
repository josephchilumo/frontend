import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const storage = JSON.parse(localStorage.getItem("user"));
  const user = storage?.user; // <-- get nested user

  // Not logged in
  if (!user) return <Navigate to="/staff/login" replace />;

  // Role not allowed
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <h2 className="p-8 text-red-600">
      Access Denied. You don’t have permission.
    </h2>;
  }

  // Allowed
  return children;
};

export default ProtectedRoute;
