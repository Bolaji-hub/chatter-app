import React, { useState } from "react";
import Socials from "../components/Socials";
import image from "../assets/unsplash_9pjBx5uVBlg.png";

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Submitted:", { fullName, email, password });
  };
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

      <form
        onSubmit={handleSubmit}
        className="py-10 flex-1 basis-6/12 px-6 gap-4 pl-8 large-container"
      >
        <h3 className="font-bold text-2xl pb-4">Register as a Writer/Reader</h3>
        <fieldset>
          <label
            htmlFor="full-name"
            className="text-[#3B3B3B] text-sm font-thin"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            value={fullName}
            placeholder="John"
            onChange={(e) => setFullName(e.target.value)}
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
          value={email}
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <label htmlFor="password" className="text-[#3B3B3B] text-sm font-thin">
          password
        </label>
        <input
          id="password"
          type="text"
          value={password}
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          placeholder="*******"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 p-3 text-white rounded-lg mt-3  "
        >
          Create account
        </button>
        <Socials />
      </form>
    </div>
  );
};

export default SignUp;
