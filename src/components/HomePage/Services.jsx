
import ServiceCard from "../Card/ServiceCard";
import getAllServices from "@/lib/getAllServices";

const Services = async() => {
  const {services} = await getAllServices();
  // console.log(services);
  return (
    <div>
      <div className="text-center space-y-3">
        <div>
          <h3 className="text-primary font-bold">Service</h3>
          <h1 className="text-3xl font-bold">Our Service Area</h1>
        </div>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don&lsquo;t look even slightly believable.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
        {services?.length > 0 && services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
