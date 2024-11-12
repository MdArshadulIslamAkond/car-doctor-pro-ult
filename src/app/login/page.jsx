"use client"
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";

const Login = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleLogin = async (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(path);
        const result = await signIn("credentials", {
          email,
          password,
          redirect: true, // Redirect to a different page instead of default
          callbackUrl: path ? path : "/"
        });
        // console.log(result);
        // if (result.ok) {
        //   formLog.reset();
        //   router.push("/");
        // }
       
      };
    return (
        <div>
            <div className="hero w-full min-h-screen">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <div className="w-full">
            <Image src={"/assets/images/login/login.svg"} alt="signin pic" width={450} height={550} style={{width:"auto", height: "auto"}} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-5">Or Sign In with</p>
            <SocialSignin path={path}/>
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