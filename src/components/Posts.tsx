import React from "react";
import pen from "../assets/Vector (36).svg";

const Posts = () => {
  return (
    <div className="text-center flex pt-8 px-6  justify-between ">
      <div className="pr-30">
        <h2 className="text-3xl pr-28">FEED</h2>
        <p className="text-[#626262] mt-3 font-extralight pl-20">
          Explore different content you'd love{" "}
        </p>
      </div>
      <button className="bg-blue-500 border rounded-lg py-4 px-4 flex gap-2 mt-3 text-white text-sm text-center">
        <img src={pen} alt="" />
        Post Content
      </button>
    </div>
  );
};

export default Posts;
