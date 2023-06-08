import React from "react";
import image from "../assets/unsplash_9pjBx5uVBlg.png";
import google from "../assets/1534129544 1.svg";
import linkedin from "../assets/174857 1.svg";

const SignUp = () => {
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
        <h3 className="font-bold text-2xl pb-4">Register as a Writer/Reader</h3>
        <fieldset>
          <label
            htmlFor="full-name"
            className="text-[#3B3B3B] text-sm font-thin"
          >
            First Name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="John"
            className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
          />
        </fieldset>
        <label
          htmlFor="joining-as"
          className="text-[#3B3B3B] text-sm font-thin"
        >
          You are joining as?
        </label>
        <select
          name="joining-as"
          id="joining-as"
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        >
          <option value="writer">Writer</option>
          <option value="reader">Reader</option>
        </select>
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
        <label htmlFor="password" className="text-[#3B3B3B] text-sm font-thin">
          password
        </label>
        <input
          id="password"
          type="text"
          placeholder="*******"
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <label
          htmlFor="confirm password"
          className="text-[#3B3B3B] text-sm font-thin"
        >
          confirm password
        </label>
        <input
          id="confirm password"
          type="text"
          placeholder="*******"
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <button className="w-full bg-blue-500 p-3 text-white rounded-lg mt-3  ">
          Create account
        </button>
        <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border-[#CED4DA] border font-thin text-sm ">
          <img src={google} alt="" />
          Sign up with google
        </button>
        <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border border-[#CED4DA] font-thin text-sm">
          <img src={linkedin} alt="" className="" />
          Sign up with Linkedin
        </button>
      </form>
    </div>
  );
};

export default SignUp;
