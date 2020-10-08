import gsap from "gsap";
const preloaderTween = () => {
  var tl = gsap.timeline({ delay: 0.1 });
  tl.fromTo(
    ".logo",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 1.1, ease: "bounce.out" }
  );
  tl.to(".logo", { scale: 0, opacity: 0, duration: 0.4, ease: "back.in" });

  tl.to(".white", { y: "100vh", duration: 1.3, ease: "expo.inOut" }, "-=0.4");

  tl.to(".black", { y: "100vh", duration: 1.3, ease: "expo.inOut" }, "-=0.8");
};

const Preloader = () => {
  return (
    <div>
      <img
        style={{
          width: "200px ",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
        }}
        className='logo fixed opacity-0'
        src='/fancy-code-logo2.svg'
      ></img>
      <div
        style={{ zIndex: 998 }}
        className='white w-full h-screen  fixed top-0 bg-white  flex items-center justify-center '
      ></div>
      <div
        style={{ zIndex: 997 }}
        className='black w-full h-screen fixed top-0 blend bg-white flex items-center justify-center '
      ></div>
    </div>
  );
};
