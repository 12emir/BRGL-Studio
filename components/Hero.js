import { useEffect } from "react";
import { withTranslation } from "../i18n";
import tw from "twin.macro";

import gsap from "gsap";

const Hero = ({ t }) => {
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
  return (
    <div>
      <div className='shapes'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
      <div className='content'>
        <h1 className='hero-title'>{t("title")}</h1>

        <div className='hero-content'>
          <p>{t("content-title")}</p>
          <p>{t("content")}</p>
        </div>
      </div>
    </div>
  );
};
export default withTranslation("hero")(Hero);
