import React from "react";
import { motion } from "framer-motion";
import { useTheme, useThemeUpdate } from "../ThemeContext";
import gsap from "gsap";

const Hamburger = () => {
  const { darkNavTheme, isOpen } = useTheme();
  const { isHamburgerOpen } = useThemeUpdate();

  const burgerAnimation = () => {
    const tweenDuration = 2;
    const easing = "elastic.out";

    if (!isOpen) {
      const up = gsap.timeline();
      const btm = gsap.timeline();
      isHamburgerOpen();

      up.to("#plank-up", {
        rotate: -135,
        transformOrigin: "50% 50%",
        duration: tweenDuration,
        ease: easing,
        y: 9,
      });

      btm.to("#plank-bottom", {
        rotate: 135,
        transformOrigin: "50% 50%",
        duration: tweenDuration,

        y: -12,
        ease: easing,
      });
      gsap.to("#plank-middle", {
        opacity: 0,
        scale: 0,
      });
    } else {
      const up = gsap.timeline();
      const btm = gsap.timeline();

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
        duration: 0.2,
        onComplete: () => {
          isHamburgerOpen();
        },
      });
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ originX: 0.5 }}
      className='hamburger'
      onClick={burgerAnimation}
    >
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        overflow='visible'
      >
        <g id='plank-up'>
          <path
            d='M1.14441e-05 4.91892H4.44231V0C1.99288 0 1.14441e-05 2.20668 1.14441e-05 4.91892Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M33 0H28.5577V4.91892C31.0133 4.91892 33 2.71907 33 0Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M4.44231 0H28.5577V4.91892H4.44231V0Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
        </g>
        <g id='plank-middle'>
          <path
            d='M3 15.4594H7.28913V10.5405C4.92415 10.5405 3 12.7472 3 15.4594Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M30 10.5405H25.7109V15.4594C28.0818 15.4594 30 13.2596 30 10.5405Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M6.86206 10.5405H26.1421V15.4594H6.86206V10.5405Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
        </g>
        <g id='plank-bottom'>
          <path
            d='M33 21.0811H28.5577V26C31.0071 26 33 23.7933 33 21.0811Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M0 26H4.4423L4.4423 21.0811C1.9867 21.0811 2.14676e-07 23.2809 0 26Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
          <path
            d='M28.5577 26L4.4423 26L4.4423 21.0811H28.5577V26Z'
            className={
              isOpen || darkNavTheme ? "svgfillwhite" : "svgfillprimary"
            }
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default Hamburger;
