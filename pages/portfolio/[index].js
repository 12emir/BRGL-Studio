import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Marquee from "@/SingleProject/Marquee";
import HeroImage from "@/SingleProject/HeroImage";

const Page = () => {
  const router = useRouter();
  const [projects, setProjects] = useState();
  const { index } = router.query;

  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://brgl.fancycod.hs10.linux.pl/wp-json/wp/v2/posts/${index}?_embed`
      );
      const json = await res.json();
      setProjects(json);
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projects && (
        <div className='w-screen min-h-screen flex justify-center items-center'>
          <Marquee title={projects.title.rendered} />
          <HeroImage img={projects.acf.hero_image} />
        </div>
      )}
    </motion.div>
  );
};

export default Page;
