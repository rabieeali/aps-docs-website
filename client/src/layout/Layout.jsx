import Footer from "../components/Footer";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div></div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
