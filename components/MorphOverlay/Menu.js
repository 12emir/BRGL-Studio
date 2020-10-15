import { useEffect } from "react";
import Link from "next/link";
import { useTheme, useThemeUpdate } from "@/ThemeContext";
import gsap, { Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Menu = () => {
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
  const menuVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
    exit: { y: 20, opacity: 0, transition: { ease: "easeIn" } },
  };
  const Menu = styled(motion.ul).attrs((props) => ({
    className: "flex flex-col lg:flex-row justify-center items-center",
    variants: menuVariants,
    initial: "hidden",
    animate: "show",
    exit: "exit",
  }))``;
  const Item = styled(motion.li).attrs((props) => ({
    className: "text-white font-bold text-3xl my-8 lg:mx-24",
  }))``;
  const ItemLink = styled(motion.h1).attrs((props) => ({
    onClick: closing,
    variants: itemVariants,
  }))``;

  return (
    <AnimatePresence>
      {isOpen && (
        <Menu>
          {data.map((link) => {
            return (
              <Item>
                <Link href={link.slug}>
                  <ItemLink>{link.name}</ItemLink>
                </Link>
              </Item>
            );
          })}
        </Menu>
      )}
    </AnimatePresence>
  );
};

export default Menu;
