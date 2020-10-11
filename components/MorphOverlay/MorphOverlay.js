import { useEffect } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
const MorphOverlay = () => {
  useEffect(() => {
    const ease = {
      exponentialIn: (t) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
      },
      exponentialOut: (t) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
      },
      exponentialInOut: (t) => {
        return t == 0.0 || t == 1.0
          ? t
          : t < 0.5
          ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
          : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
      },
      sineOut: (t) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
      },
      circularInOut: (t) => {
        return t < 0.5
          ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
          : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
      },
      cubicIn: (t) => {
        return t * t * t;
      },
      cubicOut: (t) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
      },
      cubicInOut: (t) => {
        return t < 0.5
          ? 4.0 * t * t * t
          : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
      quadraticOut: (t) => {
        return -t * (t - 2.0);
      },
      quarticOut: (t) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
      },
    };
    setTimeout(() => document.body.classList.add("render"), 60);
    const navdemos = Array.from(document.querySelectorAll("nav.demos > .demo"));
    const total = navdemos.length;
    const current = navdemos.findIndex((el) =>
      el.classList.contains("demo--current")
    );
    const navigate = (linkEl) => {
      document.body.classList.remove("render");
      document.body.addEventListener(
        "transitionend",
        () => (window.location = linkEl.href)
      );
    };
    navdemos.forEach((link) =>
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        navigate(ev.target);
      })
    );
    document.addEventListener("keydown", (ev) => {
      const keyCode = ev.keyCode || ev.which;
      let linkEl;
      if (keyCode === 37) {
        linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
      } else if (keyCode === 39) {
        linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
      } else {
        return false;
      }
      navigate(linkEl);
    });

    class ShapeOverlays {
      constructor(elm) {
        this.elm = elm;
        this.path = elm.querySelectorAll("path");
        this.numPoints = 10;
        this.duration = 900;
        this.delayPointsArray = [];
        this.delayPointsMax = 300;
        this.delayPerPath = 250;
        this.timeStart = Date.now();
        this.isOpened = false;
        this.isAnimating = false;
      }
      toggle() {
        this.isAnimating = true;
        for (var i = 0; i < this.numPoints; i++) {
          this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
        }
        if (this.isOpened === false) {
          this.open();
        } else {
          this.close();
        }
      }
      open() {
        this.isOpened = true;
        this.elm.classList.add("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }
      close() {
        this.isOpened = false;
        this.elm.classList.remove("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }
      updatePath(time) {
        const points = [];
        for (var i = 0; i < this.numPoints; i++) {
          points[i] =
            (1 -
              ease.cubicInOut(
                Math.min(
                  Math.max(time - this.delayPointsArray[i], 0) / this.duration,
                  1
                )
              )) *
            100;
        }
        let str = "";
        str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
        for (var i = 0; i < this.numPoints - 1; i++) {
          const p = ((i + 1) / (this.numPoints - 1)) * 100;
          const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
          str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
            points[i + 1]
          } `;
        }
        str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
        return str;
      }

      render() {
        if (this.isOpened) {
          for (var i = 0; i < this.path.length; i++) {
            this.path[i].setAttribute(
              "d",
              this.updatePath(
                Date.now() - (this.timeStart + this.delayPerPath * i)
              )
            );
          }
        } else {
          for (var i = 0; i < this.path.length; i++) {
            this.path[i].setAttribute(
              "d",
              this.updatePath(
                Date.now() -
                  (this.timeStart +
                    this.delayPerPath * (this.path.length - i - 1))
              )
            );
          }
        }
      }
      renderLoop() {
        this.render();
        if (
          Date.now() - this.timeStart <
          this.duration +
            this.delayPerPath * (this.path.length - 1) +
            this.delayPointsMax
        ) {
          requestAnimationFrame(() => {
            this.renderLoop();
          });
        } else {
          this.isAnimating = false;
        }
      }
    }

    (function () {
      const elmHamburger = document.querySelector(".hamburger");
      const overlayShutter = document.querySelector(".overlay-shutter");

      const gNavItems = document.querySelectorAll(".global-menu__item");
      const elmOverlay = document.querySelector(".shape-overlays");

      const overlay = new ShapeOverlays(elmOverlay);

      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].addEventListener("click", () => {
          if (overlay.isAnimating) {
            return false;
          }
          overlay.toggle();
          if (overlay.isOpened === true) {
            elmHamburger.classList.add("is-opened-navi");
            for (var i = 0; i < gNavItems.length; i++) {
              gNavItems[i].classList.add("is-opened");
            }
          } else {
            elmHamburger.classList.remove("is-opened-navi");
            for (var i = 0; i < gNavItems.length; i++) {
              gNavItems[i].classList.remove("is-opened");
            }
          }
        });
      }

      elmHamburger.addEventListener("click", () => {
        if (overlay.isAnimating) {
          return false;
        }
        overlay.toggle();
        if (overlay.isOpened === true) {
          elmHamburger.classList.add("is-opened-navi");
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add("is-opened");
          }
        } else {
          elmHamburger.classList.remove("is-opened-navi");
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove("is-opened");
          }
        }
      });
    })();
  }, []);
  const toggleTransition = () => {
    ShapeOverlays.toggle();
  };
  return (
    <motion.div exit={{ opacity: 0 }} className='demo-6'>
      <main class='main main--demo-6'>
        <div class='content content--demo-6'>
          <div class=' hamburger--demo-6 js-hover'>
            <div class='hamburger__line hamburger__line--01'>
              <div class='hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5'></div>
            </div>
            <div class='hamburger__line hamburger__line--02'>
              <div class='hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5'></div>
            </div>
            <div class='hamburger__line hamburger__line--03'>
              <div class='hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5'></div>
            </div>
            <div class='hamburger__line hamburger__line--cross01'>
              <div class='hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5'></div>
            </div>
            <div class='hamburger__line hamburger__line--cross02'>
              <div class='hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5'></div>
            </div>
          </div>
          <div class='global-menu'>
            <Link href='/portfolio'>
              <a class='linkz global-menu__item global-menu__item--demo-6'>
                Portfolio{" "}
              </a>
            </Link>
            <a
              class='global-menu__item linkz global-menu__item--demo-6'
              href='#'
            >
              About
            </a>
            <Link href='/contact'>
              <a class='overlay-shutter linkz global-menu__item global-menu__item--demo-6'>
                Contact{" "}
              </a>
            </Link>
          </div>
          <svg
            class='shape-overlays'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient id='gradient1' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stop-color='#00c99b' />
                <stop offset='100%' stop-color='#ff0ea1' />
              </linearGradient>
              <linearGradient id='gradient2' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stop-color='#ffd392' />
                <stop offset='100%' stop-color='#ff3898' />
              </linearGradient>
              <linearGradient id='gradient3' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stop-color='#110046' />
                <stop offset='100%' stop-color='#32004a' />
              </linearGradient>
            </defs>
            <path class='shape-overlays__path'></path>
            <path class='shape-overlays__path'></path>
            <path class='shape-overlays__path'></path>
          </svg>
        </div>
      </main>
    </motion.div>
  );
};
export default MorphOverlay;
