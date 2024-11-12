import { FaLocationDot } from "react-icons/fa6";
import { MdPermPhoneMsg } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";

const OpenTime = () => {
    return (
        <div className="bg-black text-white flex gap-x-6 justify-between items-center px-20 py-24 rounded-xl">
            <div className="flex gap-x-4 justify-center items-center">
            <RiCalendarScheduleFill className="text-4xl"/>
                <div>
                    <p className="text-sm">We are open monday-friday</p>
                    <h1 className="font-bold text-3xl">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="flex gap-x-4 justify-center items-center">
            <MdPermPhoneMsg className="text-4xl" />
                <div>
                    <p className="text-sm">Have a question?</p>
                    <h1 className="font-bold text-3xl">+2546 251 2658</h1>
                </div>
            </div>
            <div className="flex gap-x-4 justify-center items-center">
            <FaLocationDot className="text-4xl" />
                <div>
                    <p className="text-sm">Need a repair? our address</p>
                    <h1 className="font-bold text-3xl">Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default OpenTime;