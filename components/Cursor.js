import { useEffect } from "react";

import gsap from "gsap";

const Cursor = () => {
  useEffect(() => {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });
    });
  }, []);
  return <div className='cursor'></div>;
};
export default Cursor;
