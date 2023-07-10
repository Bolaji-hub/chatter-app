import React from "react";
import image from "../assets/unsplash_9pjBx5uVBlg.png";

const LogIn = () => {
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
      <form className="py-10 flex-1 basis-6/12 px-6 gap-4 pl-8 large-container">
        <h3 className="font-bold text-2xl pb-4">Welcome Back</h3>
        <fieldset>
          <label
            htmlFor="Email address"
            className="text-[#3B3B3B] text-sm font-thin"
          >
            Email address
          </label>
          <input
            id="email"
            type="text"
            placeholder="johndoe@gmail.com"
            className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
          />
          <label
            htmlFor="password"
            className="text-[#3B3B3B] text-sm font-thin"
          >
            password
          </label>
          <input
            id="password"
            type="text"
            placeholder="*******"
            className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
          />
          <button className="w-full bg-blue-500 p-3 text-white rounded-lg mt-3  ">
            Log in
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LogIn;
