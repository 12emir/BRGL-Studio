import { useEffect } from "react";

import { motion } from "framer-motion";
import ContactForm from "@/ContactForm.js";
import { i18n, Link, withTranslation } from "../i18n";
import PropTypes from "prop-types";
import { useTheme, useThemeUpdate } from "@/ThemeContext";

const Contact = ({ t }) => {
  const { darkTheme, darkNavTheme } = useTheme();
  const { light, lightNav } = useThemeUpdate();
  useEffect(() => {
    lightNav();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      exit={{ opacity: 0 }}
      className=' flex flex-col justify-center items-center w-full h-screen'
    >
      <h1>O mnie</h1>
    </motion.div>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ["common", "contactForm"],
});

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common", "contactForm")(Contact);
