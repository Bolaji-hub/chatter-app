import React from "react";

const SubHeader = () => {
  return (
    <div className="flex text-center justify-center items-center py-10 text-lg font-medium cursor-pointer">
      <ul className="flex justify-between border rounded-lg w-full px-12">
        <li className="border-b-[6px] border-solid border-blue-500 hover:scale-105 duration-150 py-4">
          For you
        </li>
        <li className="hover:scale-105 duration-150 py-4">Featured</li>
        <li className="hover:scale-105 duration-150 py-4">Recent</li>
      </ul>
    </div>
  );
};

export default SubHeader;
