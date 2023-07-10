import google from "../assets/1534129544 1.svg";
import linkedin from "../assets/174857 1.svg";

const Socials: React.FC = () => {
  return (
    <div>
      <div>
        <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border-[#CED4DA] border font-thin text-sm ">
          <img src={google} alt="" />
          Sign up with google
        </button>
      </div>

      <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border-[#CED4DA] border font-thin text-sm ">
        <img src={google} alt="" />
        Sign up with google clientId="YOUR_GOOGLE_CLIENT_ID"
      </button>
      <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border border-[#CED4DA] font-thin text-sm mt-4">
        <img src={linkedin} alt="" className="" />
        Sign up with Linkedin clientId="YOUR_LINKEDIN_CLIENT_ID"
      </button>
    </div>
  );
};

export default Socials;
