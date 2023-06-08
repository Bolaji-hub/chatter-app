import React from "react";
import carbon from "../assets/carbon_analytics.svg";
import fluent from "../assets/fluent_people-community-32-filled.svg";
import vector from "../assets/Vector (28).svg";

const Join = () => {
  return (
    <div className="px-6 py-20">
      <div className="h-full mt-8 flex flex-col ">
        <h3 className="text-xl font-semibold text-center items-center mr-6 leading-loose">
          Why you should join chatter
        </h3>
        <p className="text-center items-center justify-center py-4 min-h-fit leading-5 text-sm">
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions,
          <br /> connecting with like-minded peers, have access to favorite
          content based on interests and able to communicate your great
          <br /> ideas with people
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:1fr">
        <div className="border rounded-md px-4 py-2">
          <img
            src={carbon}
            alt=""
            className="bg-[#D6D1F8] rounded-lg px-2 py-2"
          />
          <span className="">
            <h4 className=" text-lg font-semibold">Analytics</h4>
            <p className="text-sm text-[#626262] font-thin">
              Analytics to track the number
              <br /> of views, likes and comment
              <br /> and also analyze the
              <br /> performance of your articles
              <br /> over a period of time
            </p>
          </span>
        </div>
        <div className="border rounded-md px-4 py-2 ">
          <img
            src={fluent}
            alt=""
            className="bg-[#D6D1F8] py-2 px-2 rounded-xl"
          />
          <span>
            <h4 className="text-lg font-semibold">Social interaction</h4>
            <p className="text-sm text-[#626262] font-thin">
              Users on the platform can
              <br /> interact with posts they like,
              <br /> comment and engage in
              <br /> discussions
            </p>
          </span>
        </div>
        <div className="border rounded-md px-4 py-2">
          <img
            src={vector}
            alt=""
            className="bg-[#D6D1F8] py-2 px-2 rounded-xl"
          />
          <span>
            <h4 className="text-lg font-semibold">Content creation</h4>
            <p className="text-sm text[#626262] font-thin">
              Write nice and appealing with
              <br /> our in-built markdown, a rich,
              <br /> text editor
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Join;
