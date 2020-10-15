import { motion } from "framer-motion";
import Portfolio from "@/Portfolio/Portfolio";
import useSWR from "swr";

const Work = ({ t }) => {
  const { data, error } = useSWR(
    "https://brgl.fancycod.hs10.linux.pl/wp-json/wp/v2/posts?_embed&per_page=30"
  );

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!data) return <div>loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className=' flex flex-col'
    >
      <Portfolio data={data} />
    </motion.div>
  );
};

export default Work;
