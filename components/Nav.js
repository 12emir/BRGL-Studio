import React, { useState, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { i18n, Link, withTranslation } from "../i18n";
const MorphOverlay = dynamic(() => import("@/MorphOverlay/MorphOverlay"));
import { useTheme } from "./ThemeContext";
import gsap, { Power4 } from "gsap";

const Logo = () => {
  const darkTheme = useTheme();

  useEffect(() => {
    var magnets = document.querySelectorAll(".magnetic");
    var strength = 35;
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
    <div>
      <Link href='/' className='logo z-10'>
        <div class='magnetic'>
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
        </div>
      </Link>
    </div>
  );
};
const LocaleSwitcher = ({ menuHandler }) => {
  const darkTheme = useTheme();
  return (
    <div className='locale-switcher '>
      <motion.span
        className={` ${darkTheme ? "text-white" : "primary-class"}`}
        onClick={() => i18n.changeLanguage("pl")}
      >
        PL
      </motion.span>
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
  const [open, setOpen] = useState(false);

  const toggleHamburger = (e) => {
    setOpen(!open);

    gsap.to(e.target, { opacity: 0, duration: 0.4, delay: 0.5 });

    gsap.to(e.target, { opacity: 1, duration: 0.2, delay: 1.2 });
  };
  return (
    <div className='hamburger'>
      <span
        onClick={toggleHamburger}
        className={`hamburger hamburger--collapse  
        ${open ? "is-active " : ""}
        ${darkTheme ? "svgfillwhite" : "svgfillblue"}`}
        type='button'
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner bg-teal-500 text-teal-500'></span>
        </span>
      </span>
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
    <div className='mx-auto p-12   fixed z-10 w-screen top-0 '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MorphOverlay />
      </motion.div>{" "}
      <Navbar />
    </div>
  );
};
export default withTranslation("nav")(Nav);
