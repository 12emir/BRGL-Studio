import { useEffect } from "react";
import { motion } from "framer-motion";
import { useThemeUpdate } from "@/ThemeContext";

import Projects from "@/Portfolio/ProjectsList";

const Portfolio = ({ data }) => {
  const { light, lightNav } = useThemeUpdate();
  useEffect(() => {
    lightNav();
  }, []);

  return (
    <div className='  w-screen  flex flex-row relative'>
      <div className='w-1/3 py-24 flex items-center pl-16 '>
        <Projects projects={data} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.4, duration: 1, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          x: 30,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
      >
        <img
          className='sticky flex justify-center items-center'
          src='https://brgl.fancycod.hs10.linux.pl/wp-content/uploads/2020/10/14a4d491124329.5e2965b106be1.png'
        ></img>
      </motion.div>
    </div>
  );
};

export default Portfolio;
