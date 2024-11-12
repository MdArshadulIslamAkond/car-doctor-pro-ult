import { connectDb } from "@/lib/connectDB"
import { ServicesData } from "@/lib/Services";
import { NextResponse } from "next/server";
export const GET = async()=>{
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try{
        await servicesCollection.deleteMany();
        const result = await servicesCollection.insertMany(ServicesData);
        return NextResponse.json({message: "seeded successfully", response: result})
    }catch(error){
        return NextResponse.json({message: error.message})
        // console.log(error)
    }
}