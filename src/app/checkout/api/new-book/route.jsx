import { connectDb } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    const newBooking = await req.json();
  const db = await connectDb();
  const bookingsCollection = db.collection("bookings");
  try {
    const booking = await bookingsCollection.insertOne(newBooking);
    return NextResponse.json({message: "Service booked successfully added"}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "something went wrong"}, {status: 400});
  }
};