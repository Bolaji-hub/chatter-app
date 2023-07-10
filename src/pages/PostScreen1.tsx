import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import bell from "../assets/Vector (34).svg";
import img from "../assets/unsplash_fHXpgMd_XhE.png";

const PostScreen1 = () => {
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
          <button className="flex mx-auto mt-10  border rounded-lg px-4 py-2 text-white bg-blue-400">
            Publish
          </button>
        </div>
        <div className="flex gap-6 mt-10 pl-10">
          <p className="text-4xl text-[#626262] border rounded-full w-10 h-10 text-center">
            +
          </p>
          <span>
            <h4 className="text-2xl text-[#D0D0D0]">Title</h4>
            <p className="text-[#D0D0D0] text-lg">Write a post.......</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostScreen1;
