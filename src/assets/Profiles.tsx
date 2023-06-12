import React from "react";
import img from "../assets/unsplash_jzz_3jWMzHA.png";
import svg from "../assets/Vector (37).svg";
import image from "../assets/unsplash_zvmZiw3vdsQ.png";
import message from "../assets/Vector (38).svg";
import love from "../assets/Vector (39).svg";
import bar from "../assets/Vector (40).svg";
const Profiles = () => {
  return (
    <div>
      <div className="flex pl-8">
        <img src={img} alt="" className="border rounded-full w-90 h-20 " />
        <span className="mt-2 pl-4">
          <h4 className=" text-lg font-thin">Grace Ikpang</h4>
          <p className="text-sm text-[#626262] mt-4">
            Product Designer. May 25th, 2023.
          </p>
        </span>
      </div>
      <h2 className="pl-8 mt-4 text-2xl">Starting out as a Product designer</h2>
      <span className="flex gap-2 pl-8 mt-2">
        <img src={svg} alt="" className="h-4" />
        <p className="text-[#626262] text-xs">10 mins read</p>
      </span>
      <p className="text-sm text-[#626262] pl-8 mt-6 font-light ">
        Embarking on a journey as a product designer can be an exhilarating and
        <br />
        fulfilling experience. As a profession that bridges the realms of art,
        <br />
        technology, and problem-solving, product design offers an opportunity to
        <br />
        shape the way people interact with the world around them.
      </p>
      <div className="pl-8 mt-4">
        <img src={image} alt="" />
        <div className="flex">
          <span>
            <img src={message} alt="" />
            <p>200</p>
          </span>
          <span>
            <img src={love} alt="" />
            <p>120</p>
          </span>
          <span>
            <img src={bar} alt="" />
            <p>2980 views</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
