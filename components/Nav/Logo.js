import React, { useState, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import { Link } from "../../i18n";
const MorphOverlay = dynamic(() => import("@/MorphOverlay/MorphOverlay"));
import { useTheme, useThemeUpdate } from "../ThemeContext";
import gsap, { Power4 } from "gsap";

const LogoWrapper = styled.div.attrs((props) => ({
  className: "logo magnetic",
}))``;
const Svg = styled.svg.attrs((props) => ({
  width: "82",
  height: "47",
  viewBox: "0 0 82 47",
}))``;

const Logo = () => {
  const { darkNavTheme, isOpen } = useTheme();
  const { isHamburgerOpen } = useThemeUpdate();

  const logoCloseOverlay = () => {
    if (isOpen) {
      isHamburgerOpen();

      const tweenDuration = 2;
      const easing = "elastic.out";

      const up = gsap.timeline();
      const btm = gsap.timeline();
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
    }
  };

  useEffect(() => {
    var magnets = document.querySelectorAll(".magnetic");
    var strength = 15;
    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseout", function (event) {
        gsap.to(event.currentTarget, 1, {
          x: 0,
          y: 0,
          ease: Power4.easeOut,
        });
      });
    });

    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();

      //console.log(magnetButton, bounding)

      gsap.to(magnetButton, 1, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: Power4.easeOut,
      });

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }
  }, []);

  return (
    <LogoWrapper className=' ' onClick={logoCloseOverlay}>
      <Link href='/'>
        <Svg
          className={` ${
            darkNavTheme || isOpen ? "svgfillwhite" : "svgfillprimary"
          }`}
        >
          <g id='b' className='magnetic'>
            <path d='M6.24233 6.28763H0V0C3.45062 0 6.24233 2.81197 6.24233 6.28763Z' />
            <path d='M6.24233 6.28763H0V22.0242H6.24233V6.28763Z' />
            <path d='M12.476 9.45764C5.58342 9.45764 0 15.0816 0 22.0242H6.23367C6.23367 18.5572 9.02538 15.7453 12.4673 15.7453C15.9093 15.7453 18.701 18.5572 18.701 22.0242H24.9347C24.9433 15.0816 19.3599 9.45764 12.476 9.45764Z' />
            <path d='M12.4673 34.5819C19.3512 34.5819 24.9347 28.958 24.9347 22.0154H18.701C18.701 25.4823 15.9093 28.2943 12.4673 28.2943V34.5819Z' />
          </g>
          <g id='r'>
            <path d='M33.5872 9.49255H27.3449V28.3031H33.5872V9.49255Z' />
            <path d='M33.5872 28.3031H27.3449V34.5907C30.7955 34.5907 33.5872 31.7787 33.5872 28.3031Z' />
            <path d='M33.5872 15.6667H39.8296V9.37906C36.3876 9.37906 33.5872 12.1998 33.5872 15.6667Z' />
            <path d='M46.0719 9.37906H39.8296V15.6667C43.2802 15.6667 46.0719 12.8547 46.0719 9.37906Z' />
          </g>
          <g id='g'>
            <path d='M60.8368 22.0242C60.8368 15.0903 55.2534 9.45764 48.3608 9.45764V15.7365C51.8027 15.7365 54.5944 18.5485 54.5944 22.0154C54.5944 25.4824 51.8027 28.2943 48.3608 28.2943V34.582C55.2534 34.582 60.8368 28.958 60.8368 22.0242Z' />
            <path d='M35.8934 22.0242C35.8934 28.958 41.4769 34.582 48.3694 34.582V28.3031C44.9275 28.3031 42.1358 25.4911 42.1358 22.0242H35.8934Z' />
            <path d='M42.1271 47H48.3694V40.7124C44.9188 40.7124 42.1271 43.5331 42.1271 47Z' />
            <path d='M54.6118 40.7124H48.3694V47C51.8201 47 54.6118 44.188 54.6118 40.7124Z' />
            <path d='M54.6061 34.6257H60.8484V22.033H54.6061V34.6257Z' />
          </g>
          <g id='l'>
            <path d='M54.6118 40.9132V34.6256H60.8541C60.8541 38.0925 58.0624 40.9132 54.6118 40.9132Z' />
            <path d='M69.5153 15.7627H63.273V34.5732H69.5153V15.7627Z' />
            <path d='M69.5153 15.7627H63.273V9.4751C66.715 9.4751 69.5153 12.2871 69.5153 15.7627Z' />
            <path d='M69.5153 34.5907H75.7577V28.3031C72.307 28.3031 69.5153 31.115 69.5153 34.5907Z' />
            <path d='M82 28.3031H75.7577V34.5907C79.1996 34.5907 82 31.7787 82 28.3031Z' />
          </g>
        </Svg>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
