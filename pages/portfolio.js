import { useEffect } from "react";
import { i18n, Link, withTranslation } from "../i18n";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Portfolio from "@/Portfolio";
import { useTheme, useThemeUpdate } from "@/ThemeContext";

const Work = ({ t }) => {
  const { darkNavTheme } = useTheme();
  const { light, lightNav } = useThemeUpdate();
  useEffect(() => {
    lightNav();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className=' flex flex-col'
    >
      <Portfolio />
    </motion.div>
  );
};
Work.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
export default withTranslation("common")(Work);
