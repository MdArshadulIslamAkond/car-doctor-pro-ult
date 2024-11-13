import Image from "next/image";
import Link from "next/link";
// import { signIn } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";
import { Suspense } from "react";
import LoginForm from "@/components/shared/login";

const Login = () => {
  return (
    <div>
      <div className="hero w-full min-h-screen">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <div className="w-full">
            <Image
              src={"/assets/images/login/login.svg"}
              alt="signin pic"
              width={450}
              height={550}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Suspense fallback={"<div>loading.......</div>"}>
              <LoginForm />
            </Suspense>
            <p className="text-center mb-5">Or Sign In with</p>

            <Suspense fallback={"<div>loading.......</div>"}>
              <SocialSignin />
            </Suspense>
            <p className="text-center m-5">
              New to Car Doctors?
              <Link className="text-primary font-bold" href={"/signup"}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
