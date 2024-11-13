"use client"
import Cover from "@/components/shared/Cover";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
const MyBookings = () => {
    const {data:{user:{email}={}} = {}} = useSession();
    const [bookings, setBookings] = useState([]);
    const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
    // console.log(email);
    const dandleDelete = async(id)=>{
        // console.log(id);
        const result = await fetch(`${BASE_URL}/my-bookings/api/booking/${id}`, {method: "DELETE"});
        const data = await result.json();
        // console.log(data);
        if(data.response.deletedCount >0){
            // const index = bookings.findIndex(booking=>booking._id===id);
            // bookings.splice(index, 1);
            // setBookings([...bookings]);
            loadData();
        }
    }
    const loadData =useCallback( async()=>{
       try {
        const result = await fetch(`${BASE_URL}/my-bookings/api/${email}`);
        const data = await result.json();
        // console.log(data.myBooking);
        setBookings(data.myBooking);
       }catch(error){
        setBookings([]);
       }
        
    }, [email, BASE_URL]);
    useEffect(()=>{
        loadData();
       
    } ,[loadData]);
  
  return (
    <div className="container">
      <Cover name={"My Bookings"} action={"my-bookings"} />
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bookings.map((booking, index)=>{
                    return (
                        <tr key={index}>
                          <th>{index+1}</th>
                          <td>{booking.serviceTitle}</td>
                          <td>{booking.amount}</td>
                          <td>{booking.date}</td>
                          <td>
                            <div className="flex items-center gap-2">
                               <Link href={`/my-bookings/update/${booking._id}`}>
                               <button className="btn btn-primary font-semibold btn-sm">edit</button>
                               </Link>
                                <button onClick={()=>dandleDelete(booking._id)} className="btn btn-secondary font-semibold btn-sm">delete</button>
                            </div>
                          </td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
