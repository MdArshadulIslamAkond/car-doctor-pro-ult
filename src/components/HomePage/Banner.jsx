"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Banner = () => {
    const  isActives = useSelectedLayoutSegment();
  return (
    <div className="container mx-auto">
      <div className="carousel md:w-full rounded-lg ">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(21, 21, 21, .7), rgba(21,21,21,0)), url(/assets/images/banner/${
                index + 1
              }.jpg)`
              // backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${index + 1}.jpg)`
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-svh bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full w-2/5 flex items-center pl-24">
              <div className="text-white space-y-8">
                <h1 className="font-bold text-6xl">{banner.title}</h1>
                <p className="capitalize">{banner.content}</p>
                <div className="space-x-6">
                  <button className="btn btn-primary btn-md rounded-md">
                    Discover More
                  </button>
                  <button className="btn btn-outline btn-md rounded-md">Latest Project</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between bottom-12 right-12 gap-6">
              <Link href={banner.prev} className="btn btn-circle btn-outline bg-opacity-30 bg-white ">
                ❮
              </Link>
              <Link href={banner.next} className={`btn btn-circle btn-outline bg-opacity-30 bg-white`}>
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    content:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    content:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    content:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    content:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
