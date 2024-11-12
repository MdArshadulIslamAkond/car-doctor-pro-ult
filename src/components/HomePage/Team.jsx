import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-3">
        <h3 className="text-primary font-bold">Teem</h3>
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
           words which don&lsquo;t look even slightly
          believable.
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-5">
        <div className="card shadow-xl border">
          <div className="p-4">
          <figure className="rounded-xl border">
           <Image src={"/assets/images/team/1.jpg"} alt="Team" width={450} height={460} style={{width: 'auto', height: 'auto'}} />
          </figure>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="card-actions">
            <FaFacebook className="text-3xl" />
            <AiFillTwitterCircle className="text-3xl" />
            <FaLinkedin className="text-3xl"/>
            <FaInstagramSquare className="text-2xl "/>
            </div>
          </div>
        </div>
        <div className="card shadow-xl border">
          <div className="p-4">
          <figure className="rounded-xl border">
           <Image src={"/assets/images/team/2.jpg"} alt="Team" width={450} height={460} style={{width: 'auto', height: 'auto'}}/>
          </figure>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="card-actions">
            <FaFacebook className="text-3xl" />
            <AiFillTwitterCircle className="text-3xl" />
            <FaLinkedin className="text-3xl"/>
            <FaInstagramSquare className="text-2xl "/>
            </div>
          </div>
        </div>
        <div className="card shadow-xl border">
          <div className="p-4">
          <figure className="rounded-xl border">
           <Image src={"/assets/images/team/3.jpg"} alt="Team" width={450} height={460} style={{width: 'auto', height: 'auto'}}/>
          </figure>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="card-actions">
            <FaFacebook className="text-3xl" />
            <AiFillTwitterCircle className="text-3xl" />
            <FaLinkedin className="text-3xl"/>
            <FaInstagramSquare className="text-2xl "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
