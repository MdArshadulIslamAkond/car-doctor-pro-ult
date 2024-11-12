"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignin = ({path}) => {
  const router = useRouter();
  const {status}= useSession();
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [status, router]);
  const handleSocialSignin = async (provider) => {
    const result = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/" 
    });
   
  };

  return (
    <div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleSocialSignin("facebook")}
          className="btn btn-circle text-xl"
        >
          <FaFacebookF className="text-[#3B5998]" />
        </button>
        <button
          onClick={() => handleSocialSignin("linkdinin")}
          className="btn btn-circle text-xl"
        >
          {" "}
          <FaLinkedinIn className="text-[#0A66C2]" />
        </button>
        <button
          onClick={() => handleSocialSignin("google")}
          className="btn btn-circle text-xl"
        >
          {" "}
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
