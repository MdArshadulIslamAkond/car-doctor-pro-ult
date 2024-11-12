"use client";
import Image from "next/image";
import Link from "next/link";
import SocialSignin from "@/components/shared/SocialSignin";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const name = form.get("name");
    const image = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const newUser = {
      name,
      image,
      email,
      password,
    };
    // console.log(newUser);
    const result = await fetch(`${process.env.NEXTAUTH_UR}/signup/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (result.ok) {
      formLog.reset();
      const result = await signIn("credentials", {
        email,
        password,
        redirect: true, // Redirect to a different page instead of default
        callbackUrl: path ? path : "/"
      });
    }
    //  console.log(result);
  };
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
              style={{width: 'auto', height: 'auto'}}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center text-primary">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="your Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-5">Or Sign Up with</p>
            <SocialSignin />
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
