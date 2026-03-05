import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import ScrollToTop from "./layout/ScrollToTop";

// Public pages
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Publications from "./pages/Publications";
import PublicationDetails from "./pages/PublicationDetails";
import Team from "./pages/Team";
import ContactPage from "./pages/Contactpage";
import Careers from "./pages/Careers";

// Staff/Admin pages
import Staff from "./pages/Staff";

function LayoutWrapper() {
  const location = useLocation();
  const isStaffRoute = location.pathname.startsWith("/staff");

  return (
    <>
      {!isStaffRoute && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <ScrollToTop />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<PublicationDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />

        {/* Staff/Admin nested routes */}
        <Route path="/staff/*" element={<Staff />} />
      </Routes>
    </>
  );
}

export default LayoutWrapper;