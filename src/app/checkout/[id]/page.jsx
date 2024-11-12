"use client";
import Cover from "@/components/shared/Cover";
import getServices from "@/lib/getService";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Checkout = ({ params }) => {
  const { data: { user: { email, name } = {} } = {} } = useSession() || {};
  // console.log(email,name);
  const [details, setDetails] = useState();
  useEffect(() => {
    const loadDetails = async () => {
      const { id } = await params;
      const details = await getServices(id);
      // console.log(details);
      setDetails(details.service);
    };
    loadDetails();
  }, [params]);
  const { _id, title, img, description, price } = details || {};
  const handleBooking = async (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    // const name = form.get("name");
    const date = form.get("date");
    // const email = form.get("email");
    const amount = form.get("price");
    const phone = form.get("phone");
    const address = form.get("address");
    const newBooking = {
      name,
      date,
      phone,
      email,
      amount,
      address,
      img,
      description,
      serviceTitle: title,
      serviceId: _id,
    };
    // Your booking logic goes here, for example, send the data to your server or API
    // console.log(newBooking);
   try{
    const result = await fetch(`${process.env.NEXTAUTH_UR}/checkout/api/new-book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });
    const response = await result.json();
    if (result.ok) {
      toast.success(response?.message);
      formLog.reset();
    }else{
      toast.error(response?.error);
    }
   }catch(error){
    // console.error(error);
    toast.error('An error occurred while booking');
 
   }
    // console.log(result);
  };
  return (
    <div className="my-10">
      <Cover name={"Check Out"} action={"Checkout"} />
      <div className="my-32 bg-[#F3F3F3] p-24 rounded-lg">
        <form onSubmit={handleBooking}>
          <div className="md:flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input
                defaultValue={new Date().getDate()}
                type="date"
                name="date"
                placeholder="mm/dd/yyyy"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                defaultValue={email}
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Due amount</span>
              </div>
              <input
                defaultValue={price}
                type="text"
                name="price"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Present Address</span>
              </div>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary w-full" type="submit">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
