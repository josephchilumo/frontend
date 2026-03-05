import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext); // ✅ This works now

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;