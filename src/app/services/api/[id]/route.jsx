import { connectDb } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {id} =await params;
  const db = await connectDb();
  const servicesCollection = db.collection("services");
  try {
    const service = await servicesCollection.findOne({_id: id});
    return NextResponse.json({message: "Success fully find data", service});
  } catch (error) {
    return NextResponse.json({message: error.message});
    // console.log(error);
  }
};
