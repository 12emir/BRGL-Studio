import { i18n, Link, withTranslation } from "../i18n";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Hero = dynamic(() => import("@/Hero"));
const Index = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className=' flex flex-col'
    >
      <Hero />
    </motion.div>
  );
};
Index.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
export default withTranslation("common")(Index);
