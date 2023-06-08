import React from "react";

const Footer = () => {
  return (
    <div className="py-20 bg-[#FFEDCC80] grid md:grid-cols-4 px-10 ">
      <div className="grid">
        <h2 className="text-3xl text-blue-500 font-bold">CHATTER</h2>
      </div>
      <div>
        <h3 className="text-black font-semibold mb-4">Explore</h3>
        <ul className="text-sm">community</ul>
        <ul className="text-sm">Trending blogs</ul>
        <ul className="text-sm">Chatter for teams</ul>
      </div>
      <div>
        <h3 className="text-black font-semibold mb-4">Support</h3>
        <ul className="text-sm">support docs</ul>
        <ul className="text-sm">Join slack</ul>
        <ul className="text-sm">Contact</ul>
      </div>
      <div>
        <h3 className="text-black font-semibold mb-4">Official blog</h3>
        <ul className="text-sm">Official blog</ul>
        <ul className="text-sm">Engineering blog</ul>
      </div>
    </div>
  );
};

export default Footer;
