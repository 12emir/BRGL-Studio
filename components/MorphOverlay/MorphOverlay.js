import { useEffect } from "react";
import Link from "next/link";
import { useTheme, useThemeUpdate } from "@/ThemeContext";
import gsap, { Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = () => {
  const { isOpen } = useTheme();
  const { isHamburgerOpen } = useThemeUpdate();

  const closing = () => {
    console.log("closing menu");
    isHamburgerOpen();

    const tweenDuration = 2;
    const easing = "elastic.out";

    const up = gsap.timeline();
    const btm = gsap.timeline();
    isHamburgerOpen();

    (function burgerAnim() {
      up.to("#plank-up", {
        rotate: 0,
        transformOrigin: "50% 50%",
        duration: tweenDuration,
        ease: easing,
        y: 0,
      });

      btm.to("#plank-bottom", {
        rotate: 0,
        transformOrigin: "50% 50%",
        y: 0,
        duration: tweenDuration,
        ease: easing,
      });
      gsap.to("#plank-middle", {
        opacity: 1,
        scale: 1,
        onComplete: () => {},
      });
    })();
  };

  const data = [
    {
      name: "o mnie",
      slug: "/o-mnie",
    },
    {
      name: "portfolio",
      slug: "/portfolio",
    },
    {
      name: "kontakt",
      slug: "/kontakt",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
    exit: { y: 20, opacity: 0, transition: { ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
          className='flex justify-center items-center'
        >
          <Link href='/o-mnie' key={3}>
            <motion.h1
              onClick={closing}
              className='text-white font-bold text-3xl mx-24'
              variants={item}
            >
              o mnie
            </motion.h1>
          </Link>
          <Link href='/portfolio' key={2}>
            <motion.h1
              onClick={closing}
              className='text-white font-bold text-3xl mx-24'
              variants={item}
            >
              portfolio
            </motion.h1>
          </Link>
          <Link href='/kontakt' onClick={closing} key={1}>
            <motion.h1
              onClick={closing}
              className='text-white font-bold text-3xl mx-24'
              variants={item}
            >
              kontakt
            </motion.h1>
          </Link>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MorphOverlay = () => {
  const { isOpen } = useTheme();
  const { isHamburgerOpen } = useThemeUpdate();

  return (
    <div className='primary-bg h-screen  fixed w-screen flex justify-center items-center'>
      <NavLinks />
    </div>
  );
};
export default MorphOverlay;
