import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about us",
    },
    {
      id: 3,
      link: "contact",
    },
    {
      id: 4,
      link: "blogs",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full h-20 px-4 sticky bg-white">
      <div>
        <h1 className="text-4xl text-blue-500 py-4 px-10 mr-20 font-semibold ">
          CHATTER
        </h1>
      </div>
      <ul className="hidden md:flex px-8 text-sm capitalize gap-2 text-black">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-105 duration-200 flex gap-2 items-center"
          >
            {link}
          </li>
        ))}

        <button className="px-6 text-md capitalize rounded-md border border-dotted p-1 gap-2">
          log in
        </button>
        <button className="px-6 text-md capitalize rounded-md border bg-blue-500 p-1 gap-2">
          sign up
        </button>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  text-md capitalize gap-2 text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer hover:scale-105 duration-200 flex gap-2 items-center"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
