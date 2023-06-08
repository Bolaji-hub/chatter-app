import React from "react";
import first from "../assets/unsplash_fHXpgMd_XhE.png";
import second from "../assets/unsplash_jzz_3jWMzHA.png";
import third from "../assets/unsplash_iEEBWgY_6lA.png";

const Started = () => {
  return (
    <div className="py-20 px-10 flex">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-20">
          <img src={first} alt="" className="rounded-full" />
          <img src={second} alt="" className="rounded-full" />
        </div>
        <img src={third} alt="" className="rounded-full" />
      </div>
      <div className=" mt-20 pl-20 ">
        <h3 className="text-2xl font-semibold items-center">
          Write, read and connect
          <br /> with great minds on chatter
        </h3>
        <p className="text-sm font-light mt-6">
          Share peoplle your great ideas, and also read write-ups based on your
          <br />
          interests. connect with people with the same interest and goals.
        </p>
        <button className="bg-blue-500 px-4 py-2 border rounded-lg text-sm mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Started;
