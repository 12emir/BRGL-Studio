import Nav from "@/Nav.js";
import Footer from "@/Footer.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
