"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Registration = () => {
  const searchParams = useSearchParams();
  const [redirectPath, setRedirectPath] = useState("/");
  useEffect(() => {
    const path = searchParams.get("redirect");
    if (path) setRedirectPath(path);
  }, [searchParams]);
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
    const result = await fetch(`${process.env.NEXTAUTH_URL}/signup/api`, {
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
        redirect: true,
        callbackUrl: redirectPath,
      });
    }
    //  console.log(result);
  };
  return (
    <div>
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-3xl font-bold text-center text-primary">Sign Up</h1>
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
    </div>
  );
};

export default Registration;
