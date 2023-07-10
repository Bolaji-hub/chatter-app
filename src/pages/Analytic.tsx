import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import bell from "../assets/Vector (34).svg";
import img from "../assets/unsplash_jzz_3jWMzHA (1).png";
import image from "../assets/unsplash_zvmZiw3vdsQ.png";
import message from "../assets/Vector (42).svg";
import love from "../assets/Vector (39).svg";
import bar from "../assets/Vector (40).svg";
import svg from "../assets/Vector (37).svg";

const Analytic = () => {
  return (
    <div className="flex ">
      <SideNav />
      <div className=" flex-1 pr-10">
        <div className="flex justify-between">
          <Search className="mx-auto" />
          <div className="relative flex w-32 top-0 right-0">
            <img src={bell} alt="" className="pr-4 w-8 " />
            <img src={img} alt="" className="rounded-full w-100 h-10 mt-4" />
          </div>
        </div>
        <div className=" border-b-2 border-blue-400">
          <h2 className="text-3xl font-semibold my-4 ">Posts analytics</h2>
          <p className="text-xl font-medium mb-6">
            May 2023,{" "}
            <span className="text-[#626262] text-sm ">25 days so far</span>
          </p>
        </div>
        <div className="my-6">
          <h5 className="text-md ">Posts highlights</h5>
          <p className="text-xl font-semibold mt-4 ">
            Top Posts{" "}
            <span className="text-[#626262] text-sm">
              earned 2980 impressions
            </span>
          </p>
        </div>

        <div className="max-w-lg">
          <div className="flex">
            <img src={img} alt="" className="border rounded-full w-90 h-20 " />
            <div className="mt-2 pl-4">
              <h4 className=" text-lg font-thin">Grace Ikpang</h4>
              <p className="text-sm text-[#626262] mt-4">
                Product Designer. May 25th, 2023.
              </p>
            </div>
          </div>
          <h2 className="mt-4 text-2xl">Starting out as a Product designer</h2>
          <span className="flex gap-2 mt-2">
            <img src={svg} alt="" className="h-4" />
            <p className="text-[#626262] text-xs">10 mins read</p>
          </span>
          <p className="text-sm text-[#626262] mt-6 font-light ">
            Embarking on a journey as a product designer can be an exhilarating
            and fulfilling experience. As a profession that bridges the realms
            of art, technology, and problem-solving, product design offers an
            opportunity to shape the way people interact with the world around
            them.
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
        <button className="bg-blue-500 px-4 py-2 border rounded-lg text-white text-sm mt-2">
          View post activity
        </button>
        <h5 className=" text-lg font-semibold mt-8">Posts summary</h5>
        <p className="font-thin text-[#626262] border-b-2 border-blue-400">
          May 2023 summary
        </p>
        <div className=" grid md:grid-cols-2 my-4">
          <div>
            <h5 className="text-[#626262]">Posts</h5>
            <p className="">3</p>
          </div>
          <div className="pr-8">
            <h5 className="text-[#626262]">Post impressions</h5>
            <p>2.98k views</p>
          </div>
          <div>
            <h5 className="text-[#626262] mt-6">Profile visit</h5>
            <p>300</p>
          </div>
          <div>
            <h5 className="text-[#626262] mt-6">New followers</h5>
            <p>300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytic;
