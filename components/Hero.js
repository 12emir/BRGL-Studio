import { useEffect } from "react";
import { withTranslation, Link } from "../i18n";
import tw from "twin.macro";

import gsap, { Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const Hero = ({ t }) => {
  const { darkNavTheme } = useTheme();
  const { toggleTheme } = useThemeUpdate();

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
    gsap.fromTo(
      ".czesc",
      { opacity: 0, scale: 1.3, letterSpacing: "30px" },
      {
        scale: 1,
        opacity: 1,
        letterSpacing: "10px",
        ease: "elastic.out",
        duration: 2.9,
        delay: 0.4,
      }
    );
  }, []);

  const logoMouseOver = () => {
    gsap.to(".czesc", {
      letterSpacing: "20px",
      ease: "elastic.out",
      duration: 1.9,
    });
  };

  const logoMouseOut = () => {
    gsap.to(".czesc", {
      letterSpacing: "10px",
      ease: "elastic.out",
      duration: 2.9,
    });
  };

  return (
    <div className='shapes-container flex justify-center items-center h-screen bg-white'>
      <div className='shapes'>
        <div className={`${darkNavTheme ? "" : ""}shape shape-1`}></div>

        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
      <div
        className={` hero-content ${darkNavTheme ? "bg-black" : "bg-white"}`}
      >
        <Link href='/portfolio'>
          <motion.h1
            exit={{
              opacity: 0,
              letterSpacing: "50px",
              transition: { ease: "easeInOut" },
            }}
            className={`czesc  ${darkNavTheme ? "text-white" : "text-black"}`}
            onMouseEnter={logoMouseOver}
            onMouseLeave={logoMouseOut}
          >
            {t("title")}
          </motion.h1>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 1, delay: 0.6 },
          }}
          exit={{ y: 30, opacity: 0, transition: { ease: "easeOut" } }}
          className={` hero-title-content ${
            darkNavTheme ? "text-white" : "text-black"
          }`}
        >
          <div className='mb-4' onClick={toggleTheme}>
            {t("content-title")}{" "}
            <AnimatePresence>
              {darkNavTheme && (
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                >
                  {t("content-span")}
                </motion.span>
              )}
              {!darkNavTheme && <span className='underline'>ptrcj brgl</span>}
            </AnimatePresence>
          </div>
          <p>{t("content")}</p>
        </motion.div>
      </div>
    </div>
  );
};
export default withTranslation("hero")(Hero);
