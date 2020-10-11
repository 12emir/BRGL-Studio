import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";

import { motion } from "framer-motion";

const Gradients = () => {
  return (
    <>
      <div
        className='w-screen  fixed top-0  '
        style={{
          height: "150px",
          zIndex: 9,
          background: "linear-gradient(to top, transparent, white 50%)",
        }}
      ></div>
      <div
        className='w-screen  fixed bottom-0  '
        style={{
          height: "50px",
          zIndex: 9,
          background: "linear-gradient(to bottom, transparent, white 40%)",
        }}
      ></div>
    </>
  );
};
const ProjectList = () => {
  // const fetcher = (url) => axios.get(url).then((res) => res.data);
  const [lols, setLols] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  // const { data, error } = useSWR(
  //   "http://ulicaprzyjemna.pl/wp-json/wp/v2/posts?_embed"
  // );
  // if (error) {
  //   console.log(error);
  //   return <div>failed to load</div>;
  // }
  // if (!data) return <div>loading...</div>;

  return (
    <main className='bg-white'>
      <Gradients />
      <nav className='menu'>
        {lols.map(({ item, i }) => (
          <div key={i} className='menu__item flex flex-col'>
            <span className='font-black mb-4 text-lg'>Coca Cola</span>
            <a className='menu__item-link'>Design project</a>

            <img className='menu__item-img' src='static/img/1.jpg'></img>

            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>Design project</span>
                <span>Design project</span>
                <span>Design project</span>
                <span>Design project</span>
                <span>Design project</span>s
              </div>
            </div>
            <span className='font-semibold mt-6 tracking-widest text-sm opacity-75 uppercase'>
              Design | UX/UI | Branding
            </span>
          </div>
        ))}
      </nav>
    </main>
  );
};

export default ProjectList;
