import React from "react";
import image from "../assets/unsplash_-2vD8lIhdnw.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${image})`,
        }}
        className=" min-h-screen text-white max-auto flex flex-col items-center justify-center h-full px-2"
      >
        <h3 className="text-3xl text-center mb-4 mr-10">
          Welcome to Chatter: A Haven for Text-
          <br /> Based Content
        </h3>
        <p className=" text-sm mb-4 mr-16">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <button className="flex w-fit px-6 py-3 my-2 items-center rounded-md cursor-pointer bg-blue-500 mr-16 mb-4 text-sm">
          Get Started
          <span className="hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
