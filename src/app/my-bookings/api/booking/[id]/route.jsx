import { connectDb } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async(request, {params}) => {
    const {id} = await params;
    // console.log(id);
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const data = await bookingsCollection.deleteOne({_id: new ObjectId(id)});
        return NextResponse.json({message: 'Service deleted successfully', response: data});
    } catch (error) {
        // console.log(error);
        return NextResponse.json({error: 'Failed to delete service'}, {status: 500});
    }
    
};
export const PATCH = async(request, {params}) => {
    const {id} = await params;
    const updateDoc = await request.json();
    // console.log(date, phone, address);
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const data = await bookingsCollection.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: {...updateDoc}
            },
            {
                upsert: true,
            }
        );
        return NextResponse.json({message: 'Booking update successfully', response: data});
    } catch (error) {
        // console.log(error);
        return NextResponse.json({error: 'Failed to booking update'}, {status: 500});
    }
    
};
export const GET = async(request, {params}) => {
    const {id} = await params;
    // console.log(id);
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const data = await bookingsCollection.findOne({_id: new ObjectId(id)});
        return NextResponse.json({message: 'Booking found successfully', response: data});
    } catch (error) {
        // console.log(error);
        return NextResponse.json({error: 'Failed to booking found'}, {status: 500});
    }
    
};

