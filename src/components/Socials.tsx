import React, { useState } from "react";
import google from "../assets/1534129544 1.svg";
import linkedin from "../assets/174857 1.svg";
import {
  IResolveParams,
  LoginSocialFacebook,
  LoginSocialGoogle,
} from "reactjs-social-login";

const REDIRECT_URI = "http://localhost:3000/sign-up";

const Socials: React.FC = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    // Handle successful Google login
    console.log("Google login successful:", response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    // Handle failed Google login
    console.log("Google login failed:", error);
  };

  const handleLinkedInLoginSuccess = (response: any) => {
    // Handle successful LinkedIn login
    console.log("LinkedIn login successful:", response);
  };

  const handleLinkedInLoginFailure = (error: any) => {
    // Handle failed LinkedIn login
    console.log("LinkedIn login failed:", error);
  };

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();

  console.log(provider, profile, "-----");

  return (
    <div>
      <LoginSocialGoogle
        client_id={process.env.REACT_APP_GG_APP_ID || ""}
        redirect_uri={REDIRECT_URI}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <button className="w-full flex justify-center items-center gap-3 bg-white p-2 text-black rounded-lg border-solid border-[#CED4DA] border font-thin text-sm ">
          <img src={google} alt="" />
          Sign up with google
        </button>
      </LoginSocialGoogle>

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
