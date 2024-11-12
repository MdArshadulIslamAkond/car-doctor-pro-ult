"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
// import img from "/assets/logo.svg";

const Navbar = () => {
  const session = useSession();
  // console.log(session);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="font-semibold hover:text-primary duration-300"
                  >
                    {/* {item.title} */}
                    {`${item.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              priority // Preload the logo image
              alt="logo"
              width={100}
              height={60}
              style={{width: "auto", height: "auto"}}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="font-semibold hover:text-primary duration-300"
                >
                  {`${item.title}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hover:bg-white">
            <AiOutlineShopping />
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button className="btn btn-outline btn-primary">Appointment</button>
          {session?.status === "loading" && <h6>Loading...</h6>}
          {session?.status === "unauthenticated" && (
            <Link href={"/login"} className="btn btn-primary ms-4">
              Login
            </Link>
          )}
          {session?.status === "authenticated" && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={session?.data?.user?.image}
                    alt="profile pic"
                    // priority
                    width={75}
                    height={75}
                    style={{width: "auto", height: "auto"}}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    // className="btn btn-primary ms-4"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "My Bookings",
    path: "/my-bookings",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
export default Navbar;
