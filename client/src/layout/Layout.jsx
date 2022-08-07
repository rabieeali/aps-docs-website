import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
