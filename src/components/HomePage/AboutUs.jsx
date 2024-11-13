import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
          <div className="relative">
            <Image
              src={"/assets/images/about_us/person.jpg"}
              alt="person"
              width={550}
              height={565}
              style={{width: 'auto', height: 'auto'}}
              //   layout="responsive"
              className="rounded-lg"
            />
            <Image
              src={"/assets/images/about_us/parts.jpg"}
              alt="person"
              width={390}
              height={398}
              // style={{width: 'auto', height: 'auto'}}
              className="rounded-lg border-8 border-white shadow-2xl absolute right-0 top-1/2 "
            />
          </div>
          </div>
          <div className="space-y-7">
            <div className="space-y-5">
              <p className="text-sm text-primary font-bold">About Us</p>
              <h1 className="font-bold text-5xl">
                We are qualified <br />
                & of experience <br />
                in this field
              </h1>
            </div>
            <div className="space-y-5">
              <p className="">
                There are many variations of passages of Lorem Ipsum
                available,but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don&apos;t
                look even slightly believable.
              </p>
              <p className="">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </p>
            </div>
            <button className="btn btn-primary btn-md rounded-md">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
