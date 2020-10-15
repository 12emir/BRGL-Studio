import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";

const ImageWrapper = styled(motion.div)`
  ${tw` w-4/5 md:w-1/2 relative`};
`;

const Overlay = styled.div`
  ${tw`absolute top-0 w-full h-full bg-primary z-20`};
`;

const Image = styled.img`
  ${tw` w-full  z-10 opacity-0`};
`;

const HeroImage = ({ img }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-overlay", {
      scaleX: 0,
      transformOrigin: "left left",
      duration: 0.6,
      ease: "expo.in",
    })
      .to(".hero-image", {
        opacity: 1,
        duration: 0.01,
      })
      .to(".hero-overlay", {
        scaleX: 0,
        transformOrigin: "right right",
        duration: 1.6,
        ease: "expo.out",
        delay: 0.1,
      });
  });
  return (
    <ImageWrapper
      exit={{ y: -30, transition: { ease: "easeIn" } }}
      className=''
    >
      <Image className='hero-image' src={img}></Image>
      <Overlay className='hero-overlay'></Overlay>
    </ImageWrapper>
  );
};

export default HeroImage;
