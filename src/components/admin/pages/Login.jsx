import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext.jsx";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );

      // Save user info in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.token,
          role: data.role,
          name: data.name,
          email: data.email,
        })
      );

      // Update auth context
      login(data);

      // Redirect to dashboard
      navigate("/staff/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Staff Login</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}