import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Publications from "./pages/Publications";
import PublicationDetails from "./pages/PublicationDetails";
import Team from "./pages/Team";
import ContactPage from "./pages/Contactpage";
import Staff from "./pages/Staff";
import Careers from "./pages/Careers";
import ScrollToTop from "./layout/ScrollToTop";
import { useLocation } from "react-router-dom";

function LayoutWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <ScrollToTop />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<PublicationDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />

        {/* Admin */}
        <Route path="/admin/*" element={<Staff />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;