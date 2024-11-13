import Image from "next/image";
import Link from "next/link";
import SocialSignin from "@/components/shared/SocialSignin";
import { Suspense } from "react";
import Registration from "@/components/shared/Registration";

const SignUp = () => {
  return (
    <div>
      <div className="hero bg-base-200 w-full min-h-screen border">
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
              <Registration />
            </Suspense>
            <p className="text-center mb-5">Or Sign Up with</p>
            <Suspense fallback={"<div>loading.......</div>"}>
              <SocialSignin />
            </Suspense>
            <p className="text-center m-5">
              Already have an account?
              <Link className="text-primary font-bold" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
