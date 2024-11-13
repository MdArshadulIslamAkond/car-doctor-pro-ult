"use client";
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const LoginForm = () => {
    const searchParams = useSearchParams();
  const [redirectPath, setRedirectPath] = useState("/");

  useEffect(() => {
    const path = searchParams.get("redirect");
    if (path) setRedirectPath(path);
  }, [searchParams]);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const email = form.get("email");
    const password = form.get("password");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: redirectPath,
    });
  };
    return (
        <div>
             <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center text-primary">
                Login
              </h1>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
        </div>
    );
};

export default LoginForm;