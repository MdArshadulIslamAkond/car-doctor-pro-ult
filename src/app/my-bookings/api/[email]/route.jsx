import { connectDb } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {email} =await params;
  const db = await connectDb();
  const bookingsCollection = db.collection("bookings");
  try {
    const myBooking = await bookingsCollection.find({email}).toArray();
    return NextResponse.json({message: "success fully find the bookings", myBooking});
  } catch (error) {
    return NextResponse.json({message: "error.message", error});
    // console.log(error);
  }
};