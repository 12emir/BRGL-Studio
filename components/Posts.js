import useSWR from "swr";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Posts = () => {
  const refScrollContainer = useRef(null);

  function Posts() {
    const { data, error } = useSWR(
      "http://ulicaprzyjemna.pl/wp-json/wp/v2/posts?_embed"
    );
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    if (data) {
      async function getLocomotive() {
        const Locomotive = (await import("locomotive-scroll")).default;
        const scroll = new Locomotive({
          el: refScrollContainer.current,
          smooth: true,
        });
      }
      getLocomotive();
    }

    return (
      <div className=''>
        <div
          ref={refScrollContainer}
          data-scroll-section
          className='flex flex-row flex-wrap'
        >
          {data.map((item, i) => (
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={item.id}
              data-scroll
              src={item._embedded["wp:featuredmedia"]["0"].source_url}
              className='w-1/2'
            ></motion.img>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Posts />
    </div>
  );
};

export default Posts;
