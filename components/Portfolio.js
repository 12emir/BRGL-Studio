import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { images } from "../constants";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const Thumbnail = ({ id, i }) => (
  <>
    <motion.div className='thumbnail' variants={thumbnailVariants}>
      <motion.div
        className='frame'
        whileHover='hover'
        variants={frameVariants}
        transition={transition}
      >
        <Link href='/portfolio/[index]' as={`/portfolio/${i}`} scroll={false}>
          <motion.img
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500`}
            alt='The Barbican'
            variants={imageVariants}
            transition={transition}
          />
        </Link>
      </motion.div>
    </motion.div>
    <style>
      {`
            .thumbnail {
                flex: 1 0 33%;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .frame {
                overflow: hidden;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
    </style>
  </>
);

const Gallery = () => (
  <>
    <div className='gallery'>
      <motion.div
        className='thumbnails'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {images.map((id, i) => (
          <Thumbnail key={id} id={id} i={i} />
        ))}
      </motion.div>
    </div>
    <style>
      {`
       
        .gallery {
            padding: 40px;
            margin: 0 auto;
            width: 100%;
            max-width: 1200px;
            position: relative;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }

         
        `}
    </style>
  </>
);

export default Gallery;
