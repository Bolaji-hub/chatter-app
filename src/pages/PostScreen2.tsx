import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import bell from "../assets/Vector (34).svg";
import img from "../assets/unsplash_fHXpgMd_XhE.png";
import cam from "../assets/Vector (44).svg";
import vid from "../assets/Vector (45).svg";

const PostScreen2 = () => {
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
          <button className="mx-auto flex relative border mt-10 rounded-xl px-6 py-2 text-white  bg-blue-500">
            Publish
          </button>
        </div>
        <div className="flex mt-10 pl-10 gap-6">
          <p className="text-2xl text-[#626262] border rounded-full w-10 h-10 text-center mb-1">
            x
          </p>
          <img src={cam} alt="" className=" " />
          <img src={vid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostScreen2;
