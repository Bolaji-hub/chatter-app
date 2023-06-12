import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import Posts from "../components/Posts";
import img from "../assets/unsplash_fHXpgMd_XhE.png";
import bell from "../assets/Vector (34).svg";
import SubHeader from "../components/SubHeader";
import Post from "../components/Post";
import Post2 from "../components/Post2";
import Post3 from "../components/Post3";

const Feed = () => {
  return (
    <div>
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
          <Posts />
          <SubHeader />
          <Post />
          <Post2 />
          <Post3 />
        </div>
      </div>
    </div>
  );
};

export default Feed;
