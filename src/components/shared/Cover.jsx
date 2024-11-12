"use client"
import Image from "next/image";

// className="absolute left-0 top-0 h-full flex items-center transform justify-start bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0) ]
//   rounded-lg"
const Cover = ({ name, action }) => {
  return (
    <div>
      <div className="relative h-72">
        <Image
          className={"absolute w-full h-ful object-cover rounded-lg"}
          src={"/assets/images/banner/4.jpg"}
          alt="cover picture"
          fill
          style={{ objectFit: "cover" }}
          //   width={550}
          //   height={350}
        />
        <div
          className={"absolute inset-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0) ] rounded-lg"}
        >
          <p className="text-white text-3xl font-bold mt-28 ml-24">
            {/* Service Details */}
            {name}
          </p>

          <div className="trapezoid absolute bottom-0 right-1/2">
            <p className="py-1 text-white">Home/{action}</p>
            {/* <button className="btn btn-primary"> Home/Service Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
