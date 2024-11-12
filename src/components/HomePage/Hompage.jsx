import Banner from "@/components/HomePage/Banner";
import AboutUs from "@/components/HomePage/AboutUs";
import OpenTime from "@/components/HomePage/OpenTime";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import Products from "@/components/HomePage/Products";
import Team from "@/components/HomePage/Team";
import Testimonial from "@/components/HomePage/Testimonial";
import Services from "@/components/HomePage/Services";


const Hompage = () => {
    return (
        <div className="my-12 space-y-28">
           <Banner />
           <AboutUs />
           <Services />
           <OpenTime />
           <Products />
           <Team />
           <CoreFeatures />
           <Testimonial />

        </div>
    );
};

export default Hompage;