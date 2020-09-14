import { motion } from "framer-motion";
import Form from "@/Form.js";

const Contact = () => {
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
      <Form />
    </motion.div>
  );
};

export default Contact;
