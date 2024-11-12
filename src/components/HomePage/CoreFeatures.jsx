import Image from "next/image";

const CoreFeatures = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-5">
        <p className="text-primary text-xl font-bold">Core Features</p>
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don&lsquo;t look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex justify-between gap-5">
        <div className="bg-[#E8E8E8] border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/group.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold">Expert Team</h1>
        </div>
        <div className="bg-primary border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/Group 38729.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold text-white">Expert Team</h1>
        </div>
        <div className="bg-[#E8E8E8] border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/person.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold">Expert Team</h1>
        </div>
        <div className="bg-[#E8E8E8] border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/Wrench.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold">Expert Team</h1>
        </div>
        <div className="bg-[#E8E8E8] border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/check.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold">Expert Team</h1>
        </div>
        <div className="bg-[#E8E8E8] border p-8 rounded-md space-y-3">
          <Image
            src={"/assets/icons/deliveryt.svg"}
            className="mx-auto"
            alt="icon"
            width={60}
            height={50}
            style={{width: 'auto', height: 'auto'}}
          />
          <h1 className="font-semibold">Expert Team</h1>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
