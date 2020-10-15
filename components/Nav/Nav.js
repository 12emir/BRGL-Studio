import React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useThemeUpdate } from "../ThemeContext";
const MorphOverlay = dynamic(() => import("@/MorphOverlay/MorphOverlay"));

import tw from "twin.macro";
import styled from "styled-components";

import Logo from "@/Nav/Logo";
import Hamburger from "@/Nav/Hamburger";

const tweenDuration = 1;
const easingOut = [0.16, 1.01, 0.63, 0.98];
const easingIn = [0.99, 0.01, 0.35, 0.97];
const morphVariants = {
  hidden: { y: "-100vh" },
  show: { y: 0, transition: { ease: easingIn, duration: 0.9 } },
  exit: {
    y: "100vh",
    transition: { ease: easingOut, duration: 0.6, delay: 0.5 },
  },
};

const Morph = styled(motion.div).attrs((props) => ({
  className: "morph",
  variants: morphVariants,
  initial: "hidden",
  animate: "show",
  exit: "exit",
}))``;

const Nav = ({ t }) => {
  const { isOpen } = useTheme();

  return (
    <div className=' absolute w-screen  z-10 '>
      <Logo />
      <Hamburger />
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Morph>
            <MorphOverlay />
          </Morph>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Nav;
