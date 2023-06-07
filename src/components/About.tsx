import React from "react";
import image from "../assets/unsplash_87gLIFoj79c.png";

const About = () => {
  return (
    <div className="flex py-10 flex-wrap-reverse">
      <div className="mx-auto flex flex-col justify-center items-center flex-1 basis-80">
        <h3 className="capitalize text-3xl text-center">about chatter</h3>
        <p className="py-4 min-h-fit text-sm leading-5 ">
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
      <div className="rounded-md flex-1 basis-32">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
