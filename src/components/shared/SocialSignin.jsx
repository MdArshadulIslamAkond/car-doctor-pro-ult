"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignin = () => {
  const searchParams = useSearchParams();
  const [redirectPath, setRedirectPath] = useState("/");
  const path = searchParams.get("redirect");
  const router = useRouter();
  const {status}= useSession();
  useEffect(() => {
    if (path) {
      setRedirectPath(path);
    }
  }, [path]);

  useEffect(() => {
    if (status === "authenticated") {
      router.push(redirectPath);
    }
  }, [status, router, redirectPath]);

  const handleSocialSignin = async (provider) => {
    const result = await signIn(provider, {
      redirect: false
      // redirect: true,
      // // callbackUrl: path,  
      // callbackUrl: redirectPath 
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
          onClick={() => handleSocialSignin("linkdin")}
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
