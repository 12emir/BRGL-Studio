import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio";
import { i18n, Link, withTranslation } from "../i18n";
import PropTypes from "prop-types";
import Posts from "@/Posts";
import ThreeFiber from "@/ThreeFiber";
import Canvas from "@/BlobCanvas/BlobCanvas";

const Index = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      exit={{ opacity: 0, y: -50 }}
      className=' flex flex-col'
    >
      <Canvas />
      {/* <ThreeFiber /> */}
      <Posts />

      <Portfolio />
    </motion.div>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Index);
