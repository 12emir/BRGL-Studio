import Nav from "@/Nav.js";
import Footer from "@/Footer.js";
2;
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
