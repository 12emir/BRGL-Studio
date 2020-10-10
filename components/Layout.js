import Nav from "@/Nav.js";
import Footer from "@/Footer.js";
import Cursor from "@/Cursor";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Cursor />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
