import { BrowserRouter as Router } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;