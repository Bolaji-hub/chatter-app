import React from "react";
import image from "../assets/unsplash_87gLIFoj79c.png";

const About = () => {
  return (
    <div className="flex">
      <div className=" mx-auto flex flex-col justify-center items-center h-full px-4 mt-10">
        <h3 className="capitalize text-3xl text-center">about chatter</h3>
        <p className=" py-4 min-h-fit text-sm leading-5 ">
          Chatter is a multi-functional platform where authors and readers can
          have access
          <br /> to their own content. It aims to be a traditional bookworm's
          heaven and a blog to
          <br /> get access to more text based content. Our vision is to foster
          an inclusive and
          <br /> vibrant community where diversity is celebrated. We encourage
          open- <br />
          mindedness and respect for all individuals, regardless of their
          backgrounds or
          <br /> beliefs. By promoting dialogue and understanding, we strive.
        </p>
      </div>
      <img
        src={image}
        alt=""
        className="rounded-md w-2/4 h-3/4 mt-10 max-w-sm mr-6"
      />
    </div>
  );
};

export default About;
