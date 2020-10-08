import { motion } from "framer-motion";
import ContactForm from "@/ContactForm.js";
import { i18n, Link, withTranslation } from "../i18n";
import PropTypes from "prop-types";

const Contact = ({ t }) => {
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
      <ContactForm />
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
