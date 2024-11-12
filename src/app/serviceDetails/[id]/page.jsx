import Cover from "@/components/shared/Cover";
import getAllServices from "@/lib/getAllServices";
import getServices from "@/lib/getService";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaCrosshairs } from "react-icons/fa6";

// export const metadata = {
//     title: "Service Details",
//     description: "Service Details Page",
//     // image: "/assets/logo.png",
//   };
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const details = await getServices(id);
  const { title, description } = details.service;
  return {
    title: `${title}`,
    description: `${description}`,
  };
};

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  //   const id = (await params).id;
  const details = await getServices(id);
  const { services } = await getAllServices();
  // console.log(services);
  const {_id, title, description, img, price, facility } = details.service;
  return (
    <div className=" space-y-10">
      <Cover name="Service Details" action="Service Details" />
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2">
          <div className="h-80">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={img}
              alt="pic"
              width={550}
              height={450}
              //   layout="fill"
              //   objectFit="cover"
            />
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-7">
            {facility.map((item, index) => (
              <div
                key={index}
                className=" bg-[#F3F3F3] p-4 border-t-4 border-t-[#FF3811] rounded-lg"
              >
                <h1 className="font-bold text-xl">{item?.name}</h1>
                <p>{item?.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <h1 className="font-bold text-xl">3 Simple Steps to Process</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="py-4 px-3 text-center border rounded-md">
                <FaCrosshairs className="text-4xl mx-auto text-primary" />
                <h1 className="text-xl font-bold mt-6">STEP ONE</h1>
                <p>
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
              <div className="py-4 px-3 text-center border rounded-md">
                <FaCrosshairs className="text-4xl mx-auto text-primary" />
                <h1 className="text-xl font-bold mt-6">STEP TWO</h1>
                <p>
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
              <div className="py-4 px-3 text-center border rounded-md">
                <FaCrosshairs className="text-4xl mx-auto text-primary" />
                <h1 className="text-xl font-bold mt-6">STEP THREE</h1>
                <p>
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-[#F3F3F3] space-y-4 p-10 rounded-lg">
            <h1 className="font-bold text-2xl">Services</h1>
            {services.map((service, index) => {
              return (
                <div key={index} className="">
                  <Link href={`/serviceDetails/${service._id}`}>
                    <div className="flex justify-between bg-white text-primary p-4">
                      <h1>{service.title}</h1>
                      <h1>
                        <FaArrowRightLong />
                      </h1>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-2xl">PRICE ${price}</h1>
            <Link href={`/checkout/${_id}`}>
            <button className="btn btn-primary w-full">Proceed Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
