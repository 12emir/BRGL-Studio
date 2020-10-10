import React, { useState, useContext } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { i18n, Link, withTranslation } from "../i18n";

const MorphOverlay = dynamic(() => import("@/MorphOverlay/MorphOverlay"));

import { useTheme, useThemeUpdate } from "./ThemeContext";

const Logo = () => {
  const darkTheme = useTheme();

  const magnetMouseOn = () => {};

  $("#container").mouseleave(function (e) {
    TweenMax.to(this, 0.3, { scale: 1 });
    TweenMax.to(".circle, .hamburger", 0.3, { scale: 1, x: 0, y: 0 });
  });

  $("#container").mouseenter(function (e) {
    TweenMax.to(this, 0.3, { transformOrigin: "0 0", scale: 1.5 });
    TweenMax.to(".circle", 0.3, { scale: 0.85 });
  });

  $("#container").mousemove(function (e) {
    callParallax(e);
  });

  function callParallax(e) {
    parallaxIt(e, ".circle", 80);
    parallaxIt(e, ".hamburger", 60);
  }

  function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var boundingRect = $this[0].getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;

    TweenMax.to(target, 0.3, {
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 2) / boundingRect.width) * movement,
      ease: Power2.easeOut,
    });
  }

  return (
    <Link href='/' className='logo'>
      <svg
        width='82'
        height='47'
        viewBox='0 0 82 47'
        className={` ${darkTheme ? "svgfillwhite" : "svgfillblue"}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M6.24233 6.28763H0V0C3.45062 0 6.24233 2.81197 6.24233 6.28763Z' />
        <path d='M6.24233 6.28763H0V22.0242H6.24233V6.28763Z' />
        <path d='M12.476 9.45764C5.58342 9.45764 0 15.0816 0 22.0242H6.23367C6.23367 18.5572 9.02538 15.7453 12.4673 15.7453C15.9093 15.7453 18.701 18.5572 18.701 22.0242H24.9347C24.9433 15.0816 19.3599 9.45764 12.476 9.45764Z' />
        <path d='M12.4673 34.5819C19.3512 34.5819 24.9347 28.958 24.9347 22.0154H18.701C18.701 25.4823 15.9093 28.2943 12.4673 28.2943V34.5819Z' />
        <path d='M33.5872 9.49255H27.3449V28.3031H33.5872V9.49255Z' />
        <path d='M33.5872 28.3031H27.3449V34.5907C30.7955 34.5907 33.5872 31.7787 33.5872 28.3031Z' />
        <path d='M33.5872 15.6667H39.8296V9.37906C36.3876 9.37906 33.5872 12.1998 33.5872 15.6667Z' />
        <path d='M46.0719 9.37906H39.8296V15.6667C43.2802 15.6667 46.0719 12.8547 46.0719 9.37906Z' />
        <path d='M60.8368 22.0242C60.8368 15.0903 55.2534 9.45764 48.3608 9.45764V15.7365C51.8027 15.7365 54.5944 18.5485 54.5944 22.0154C54.5944 25.4824 51.8027 28.2943 48.3608 28.2943V34.582C55.2534 34.582 60.8368 28.958 60.8368 22.0242Z' />
        <path d='M35.8934 22.0242C35.8934 28.958 41.4769 34.582 48.3694 34.582V28.3031C44.9275 28.3031 42.1358 25.4911 42.1358 22.0242H35.8934Z' />
        <path d='M42.1271 47H48.3694V40.7124C44.9188 40.7124 42.1271 43.5331 42.1271 47Z' />
        <path d='M54.6118 40.7124H48.3694V47C51.8201 47 54.6118 44.188 54.6118 40.7124Z' />
        <path d='M54.6061 34.6257H60.8484V22.033H54.6061V34.6257Z' />
        <path d='M54.6118 40.9132V34.6256H60.8541C60.8541 38.0925 58.0624 40.9132 54.6118 40.9132Z' />
        <path d='M69.5153 15.7627H63.273V34.5732H69.5153V15.7627Z' />
        <path d='M69.5153 15.7627H63.273V9.4751C66.715 9.4751 69.5153 12.2871 69.5153 15.7627Z' />
        <path d='M69.5153 34.5907H75.7577V28.3031C72.307 28.3031 69.5153 31.115 69.5153 34.5907Z' />
        <path d='M82 28.3031H75.7577V34.5907C79.1996 34.5907 82 31.7787 82 28.3031Z' />
      </svg>
      <div id='magnet-container'>
        <div class='magnet-circle'></div>
        <div class='hamburger'>=</div>
      </div>
    </Link>
  );
};

const LocaleSwitcher = ({ menuHandler }) => {
  const darkTheme = useTheme();

  return (
    <div className='locale-switcher '>
      <span
        className={` ${darkTheme ? "text-white" : "primary-class"}`}
        onClick={() => i18n.changeLanguage("pl")}
      >
        PL
      </span>
      <span
        className={` ${darkTheme ? "text-white" : "primary-class"}`}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </span>
    </div>
  );
};

const Hamburger = () => {
  const darkTheme = useTheme();

  return (
    <div className='hamburger'>
      <svg
        width='33'
        height='26'
        viewBox='0 0 33 26'
        className={` ${darkTheme ? "svgfillwhite" : "svgfillblue"}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 4.91892H4.4423V0C1.99287 0 0 2.20668 0 4.91892Z' />
        <path d='M33 0H28.5577V4.91892C31.0133 4.91892 33 2.71907 33 0Z' />
        <rect x='4.44232' width='24.1153' height='4.91892' />
        <path d='M0 15.4595H4.4423V10.5406C1.99287 10.5406 0 12.7472 0 15.4595Z' />
        <path d='M33 10.5406H28.5577V15.4595C31.0133 15.4595 33 13.2596 33 10.5406Z' />
        <rect x='4.44226' y='10.5406' width='24.1153' height='4.91892' />
        <path d='M33 21.0811L28.5577 21.0811L28.5577 26C31.0071 26 33 23.7933 33 21.0811Z' />
        <path d='M-4.00543e-05 26L4.44226 26L4.44226 21.0811C1.98666 21.0811 -3.98396e-05 23.2809 -4.00543e-05 26Z' />
        <rect
          x='28.5577'
          y='26'
          width='24.1153'
          height='4.91892'
          transform='rotate(-180 28.5577 26)'
        />
      </svg>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <Logo />
      <div className='flex flex-row'>
        <LocaleSwitcher />
        <Hamburger />
      </div>
    </div>
  );
};

const Nav = ({ t }) => {
  return (
    <div className='mx-auto p-6  fixed z-10 w-screen top-0 '>
      <MorphOverlay />
      <Navbar />
    </div>
  );
};

export default withTranslation("nav")(Nav);
