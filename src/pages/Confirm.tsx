import React from "react";
import image from "../assets/unsplash_9pjBx5uVBlg.png";

const Confirm = () => {
  return (
    <div className="flex min-h-screen">
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${image})`,
        }}
        className="mx-auto flex-col basis-48 flex-1 hidden md:flex"
      >
        <div className="py-20 pt-40">
          <h3 className="text-2xl text-white font-semibold text-center pt-20 items-center justify-center ">
            CHATTER
          </h3>
          <p className="text-sm text-white px-10  pt-4 text-center ">
            Unleash the Power of Words, Connect with Like-
            <br />
            minded Readers and Writers
          </p>
        </div>
      </div>
      <div className="py-10 flex-1 text-center items-center justify-center basis-6/12 px-6 gap-4 large-container">
        <h4 className="font-bold text-2xl pb-4">Enter confirmation code</h4>
        <p className="text-sm text-[#626262]">
          We emailed you a code. Please enter the code here for account
          verification
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="border w-14 h-12 rounded-lg border-[#CED4DA]"></span>
          <span className="border w-14 h-12 rounded-lg border-[#CED4DA]"></span>
          <span className="border w-14 h-12 rounded-lg border-[#CED4DA]"></span>
          <span className="border w-14 h-12 rounded-lg border-[#CED4DA]"></span>
        </div>
        <button className="w-full px-2 py-2 bg-blue-500 border rounded-lg text-white text-sm mt-4">
          Create account
        </button>
      </div>
    </div>
  );
};

export default Confirm;
