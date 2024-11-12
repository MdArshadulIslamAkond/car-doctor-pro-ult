"use client";
import Cover from "@/components/shared/Cover";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Update = ({ params }) => {
  const [bookings, setBookings] = useState([]);

  const loadData = useCallback(async () => {
    const { id } = await params;
    const result = await fetch(
      `${process.env.NEXTAUTH_UR}/my-bookings/api/booking/${id}`
    );
    const data = await result.json();
    // console.log(data.response);
    setBookings(data.response);
    // return data.myBooking;
  }, [params]);
  useEffect(() => {
    loadData();
  }, [loadData]);
  const updateBooking = async (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    // const name = form.get("name");
    const date = form.get("date");
    // const email = form.get("email");
    // const amount = form.get("price");
    const phone = form.get("phone");
    const address = form.get("address");
    const updateBooking = {
      // name : bookings.name,
      date,
      phone,
      // email: bookings.email,
      // amount: bookings.amount,
      address,
      // img: bookings.img,
      // description: bookings.description,
      // serviceTitle: bookings.serviceTitle,
      // serviceId: bookings.serviceId,
    };
    try {
      const { id } = await params;
      const updatedata = await fetch(  `${process.env.NEXTAUTH_UR}/my-bookings/api/booking/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBooking),
      });
      const{response} = await updatedata.json();
      // console.log(response);
      if(response.modifiedCount > 0){
        // console.log("jhjhfkjgjfkdjgokd")
        toast.success("'Booking update successfully");
        formLog.reset();
        loadData();
      }else{
        toast.error("Failed to booking update");
      }
    } catch (err) {
      toast.error("Failed to booking update server error");
      // console.log(err);
    } finally {
      // Reset form after submission
     
    }
  };
  return (
    <div className="my-10">
      <Cover name={"Up Date Booking"} action={"update"} />
      <div className="my-32 bg-[#F3F3F3] p-24 rounded-lg">
        <form onSubmit={updateBooking}>
          <div className="md:flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                defaultValue={bookings.name}
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
                defaultValue={bookings.date}
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
                defaultValue={bookings.email}
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
                defaultValue={bookings.amount}
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
              defaultValue={bookings.phone}
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
              defaultValue={bookings.address}
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

export default Update;
