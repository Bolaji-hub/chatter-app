import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import img from "../assets/unsplash_fHXpgMd_XhE.png";
import bell from "../assets/Vector (34).svg";

const Feed = () => {
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
      </div>
    </div>
  );
};

export default Feed;
