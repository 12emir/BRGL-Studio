import { useEffect } from "react";
import { withTranslation } from "../i18n";
import tw from "twin.macro";

import gsap, { Power4 } from "gsap";
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

  // useEffect(() => {
  //   var magnets = document.querySelectorAll(".magnetic-hero");
  //   var strength = 35;

  //   magnets.forEach((magnet) => {
  //     magnet.addEventListener("mousemove", moveMagnet);
  //     magnet.addEventListener("mouseout", function (event) {
  //       gsap.to(event.currentTarget, 2, {
  //         x: 0,
  //         y: 0,
  //         ease: Power4.easeOut,
  //       });
  //     });
  //   });

  //   function moveMagnet(event) {
  //     var magnetButton = event.currentTarget;
  //     var bounding = magnetButton.getBoundingClientRect();

  //     //console.log(magnetButton, bounding)

  //     gsap.to(magnetButton, 1, {
  //       x:
  //         ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
  //         strength,
  //       y:
  //         ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
  //         strength,
  //       ease: Power4.easeOut,
  //     });

  //     //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
  //   }
  // }, []);

  return (
    <div className='flex justify-center items-center h-screen bg-white'>
      <div className='shapes '>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
      <div className={` hero-content ${darkTheme ? "bg-black" : "bg-white"}`}>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.25 } }}
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
          className={` hero-title-content ${
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
