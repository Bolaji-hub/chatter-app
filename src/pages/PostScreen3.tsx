import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import bell from "../assets/Vector (34).svg";
import img from "../assets/unsplash_fHXpgMd_XhE.png";
import image from "../assets/unsplash_wqLGlhjr6Og.png";

const PostScreen3 = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className=" flex-1 pr-10">
        <div className="flex justify-between">
          <Search className="mx-auto" />
          <div className="relative flex w-32 top-0 right-0">
            <img src={bell} alt="" className="pr-4 w-8 " />
            <img src={img} alt="" className="rounded-full w-100 h-10 mt-4" />
          </div>
        </div>
        <div className="flex-1">
          <button className="mx-auto flex relative border mt-10 rounded-lg px-8 py-2 text-white  bg-blue-500">
            Publish
          </button>
        </div>
        <div className="h-screen absolute mt-10 items-center justify-center pl-10">
          <img src={image} alt="" className="" />
          <p className="text-[#626262] mt-4">Write a post....</p>
        </div>
      </div>
    </div>
  );
};

export default PostScreen3;
