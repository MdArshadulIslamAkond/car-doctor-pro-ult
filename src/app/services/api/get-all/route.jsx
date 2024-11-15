import { connectDb } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDb();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    return NextResponse.json({message: "Successfully find all data services", services});
  } catch (error) {
    return NextResponse.json({message: error.message});
    // console.log(error);
  }
};
