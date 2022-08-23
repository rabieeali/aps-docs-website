import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard ";
import History from "./pages/History";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import UploadDocument from "./pages/UploadDocument";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload-docs" element={<UploadDocument />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
