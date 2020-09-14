// components/nav.js
import React from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => (
  <nav className=' bg-gray-100 flex justify-between items-center p-4'>
    <h1>LOGO</h1>

    <ul className='flex  '>
      {links.map(({ key, href, label }) => (
        <li key={key} className='flex ml-4'>
          <Link href={href}>
            <a className='no-underline text-lg'>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
