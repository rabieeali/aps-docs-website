import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import History from "./pages/History";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import UploadDocument from "./pages/UploadDocument";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload-docs" element={<UploadDocument />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
