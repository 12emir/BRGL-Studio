import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

const ProjectItemWrapper = styled(motion.div)`
  ${tw`  flex flex-col my-16  `};
`;

const Klient = styled.div`
  ${tw`font-bold mb-4 text-lg`};
`;

const TitleWrapper = styled.div`
  ${tw` overflow-hidden  leading-normal`};
`;

const Title = styled(motion.div)`
  ${tw`text-5xl font-black flex`};
`;

const CategoriesWrapper = styled.div`
  ${tw` flex font-semibold mt-6 tracking-widest text-base opacity-75 `}
`;

const CategoriesInner = styled.div`
  ${tw` flex flex-row `}
`;

const CategoriesInnerWrapper = styled(CategoriesInner).attrs((props) => ({
  className: "divider",
}))``;
const Divider = styled.div.attrs((props) => ({
  className: "divider",
}))``;

const Divider2 = styled.span`
  ${tw`mx-4`}
`;
const Categories = styled.div`
  ${tw`text-primary`};
`;
const Char = styled(motion.div)`
  ${tw``};
`;

const ProjectItem = ({ item, projects }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#title",
      { y: 220, skewY: 35 },
      {
        y: 0,
        skewY: 0,
        ease: "power4.out",
        duration: 1.2,
        stagger: { each: 0.15 },
        delay: 0.5,
      }
    )
      .fromTo(
        "#klient",
        { x: -15, opacity: 0 },
        { x: 0, opacity: 1, ease: "ease.in", stagger: { amount: 0.4 } },
        0.8
      )
      .fromTo(
        "#kategorie",
        { x: -15, opacity: 0 },
        { x: 0, opacity: 1, ease: "ease.in", stagger: { amount: 0.4 } },
        1
      );
  }, []);

  const stringArray = item.title.rendered.split("");

  const name = "MARINA";
  const nameArr = name.split("");

  const transition = {
    ease: [0.5, 0.01, -0.05, 0.9],
  };

  const titleVariants = {
    animate: () => ({
      transition: {
        staggerChildren: 0.02,
      },
    }),
  };

  const charVariants = {
    animate: {
      y: -15,
      transition: {
        duration: 0.4,
        ...transition,
        repeat: Infinity,
        yoyo: true,
      },
    },
  };

  return (
    <Link
      href={`/portfolio/[index]`}
      as={`/portfolio/${item.id}`}
      scroll={false}
    >
      <ProjectItemWrapper
        exit={{ x: -30, opacity: 0, transition: { ease: "easeIn" } }}
      >
        <Klient id='klient'>{item.acf.klient}</Klient>
        <TitleWrapper>
          <Title id='title' variants={titleVariants} whileHover='animate'>
            {stringArray.map((char, i) => (
              <Char variants={charVariants} key={i} className='char'>
                {char}
              </Char>
            ))}
          </Title>
        </TitleWrapper>

        <CategoriesWrapper id='kategorie'>
          {projects[0]._embedded["wp:term"][1].map((item, i) => {
            return (
              <CategoriesInnerWrapper key={i}>
                <Divider>
                  <Categories>{item.name}</Categories>
                </Divider>
                <Divider2> / </Divider2>
              </CategoriesInnerWrapper>
            );
          })}
        </CategoriesWrapper>
      </ProjectItemWrapper>
    </Link>
  );
};

export default ProjectItem;
