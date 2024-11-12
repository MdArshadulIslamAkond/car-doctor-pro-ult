import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({service}) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl border">
        <div className="p-4 h-[282px]">
        <figure className="">
          <Image src={service?.img} alt="card" width={375} height={120} style={{width: "auto", height: "auto"}} className="rounded-lg" />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{service?.title}</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-semibold">Price:${service?.price}</p>
            <Link href={`/serviceDetails/${service._id}`}>
            <FaArrowRightLong className="text-xl text-primary"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
