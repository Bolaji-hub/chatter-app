import React from "react";
import img from "../assets/unsplash_fHXpgMd_XhE.png";
import image from "../assets/unsplash_wqLGlhjr6Og.png";
import svg from "../assets/Vector (37).svg";
import message from "../assets/Vector (42).svg";
import love from "../assets/Vector (39).svg";
import bar from "../assets/Vector (40).svg";

const Post3 = () => {
  return (
    <div className="border border-solid border-[#D0D0D0] py-9 px-11">
      <div className="max-w-lg">
        <div className="flex">
          <img src={img} alt="" className="border rounded-full w-90 h-20 " />
          <div className="mt-2 pl-4">
            <h4 className=" text-lg font-thin">Adebola Muhydeen</h4>
            <p className="text-sm text-[#626262] mt-4">
              Political analist. May 23rd, 2023.
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-2xl">
          The Impact of social media on Political discourse
        </h2>
        <span className="flex gap-2 mt-2">
          <img src={svg} alt="" className="h-4" />
          <p className="text-[#626262] text-xs">10 mins read</p>
        </span>
        <p className="text-sm text-[#626262] mt-6 font-light ">
          In the era of digital communication, social media platforms have
          become pervasive in our daily lives, revolutionizing the way we
          connect, share information, and engage with the world
        </p>
        <img src={image} alt="" />
        <div className="flex justify-between mt-2">
          <span className="flex gap-2">
            <img src={message} alt="" className="h-4 " />
            <p className="text-sm text-[#626262]">200</p>
          </span>
          <span className="flex gap-2">
            <img src={love} alt="" className="h-4" />
            <p className="text-sm text-[#626262]">120</p>
          </span>
          <span className="flex gap-2">
            <img src={bar} alt="" className="h-4" />
            <p className="text-sm text-[#626262]">2980 views</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post3;
