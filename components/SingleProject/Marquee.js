import { motion, AnimatePresence } from "framer-motion";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";

const Marquee = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      class='menu'
    >
      <div class='marquee'>
        <div class='marquee__inner' aria-hidden='true'>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Marquee;
