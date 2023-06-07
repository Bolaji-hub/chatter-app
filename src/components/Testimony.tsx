import React from "react";
import unsplash from "../assets/unsplash_ZHvM3XIOHoE.png";

const Testimony = () => {
  return (
    <div className="bg-[#FFEDCC80] flex flex-wrap items-center justify-center py-24 gap-4">
      <img src={unsplash} alt="" className="rounded-full flex px-4" />
      <div className=" ">
        <p className=" text-sm font-light flex justify-center items-center mb-8">
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I<br /> have discovered a
          vibrant community of individuals who are passionate about sharing
          their ideas and engaging
          <br /> in thoughtful discussions.”
        </p>
        <p className=" text-lg font-semibold">
          Adebola Muhydeen,
          <span className="text-sm font-light">
            Software developer at Apple
          </span>
        </p>
        <button className="rounded-lg border bg-blue-500 py-2 px-4 capitalize font-normal text-sm">
          join chatter
        </button>
      </div>
    </div>
  );
};

export default Testimony;
