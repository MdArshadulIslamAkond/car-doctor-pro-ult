import { connectDb } from "@/lib/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async(request)=>{
    const newUser = await request.json();
    try{
        const db = await connectDb();
        const userCollection = db.collection('users');
        const exist = await userCollection.findOne({email: newUser.email});
        if(exist){
            return NextResponse.json({error: 'Email already exists'}, {status: 409});
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 12);
        const result = await userCollection.insertOne({...newUser, password: hashedPassword});
        // const result = await userCollection.insertOne({newUser});
        return NextResponse.json({message: "User added successfully"}, {status: 200});
    }catch(error){
        // console.error('Error:', error);
        // return {status: 400, body: JSON.stringify({ error: 'Invalid data' })};
        return NextResponse.json({error: 'An error occurred while adding the user'}, {status: 500});
    }
}