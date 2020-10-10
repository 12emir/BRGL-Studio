import { useEffect } from "react";
import { withTranslation } from "../i18n";
import tw from "twin.macro";

import gsap from "gsap";
import { motion } from "framer-motion";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const Hero = ({ t }) => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  console.log(darkTheme);
  useEffect(() => {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  return (
    <div>
      <div className='shapes'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
      <div className={`hero-content ${darkTheme ? "bg-black" : "bg-white"}`}>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.15 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`hero-title ${darkTheme ? "text-white" : "text-black"}`}
          onClick={toggleTheme}
        >
          {t("title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: -100, opacity: 1, transition: { delay: 0.35 } }}
          className={`hero-title-content ${
            darkTheme ? "text-white" : "text-black"
          }`}
        >
          <p className='mb-3'>{t("content-title")}</p>
          <p>{t("content")}</p>
        </motion.div>
      </div>
    </div>
  );
};
export default withTranslation("hero")(Hero);
