// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Assert that MONGODB_URI is a string
const options = {};

async function connectToDatabase() {
  const client = new MongoClient(uri, options);
  await client.connect();
  return client;
}

export async function POST(request: Request) {
  const data = await request.json(); // Get the request data
  
  try {
    const client = await connectToDatabase();
    const db = client.db(); // Use the database name as needed
    const collection = db.collection('contacts'); // Change this to your desired collection name

    const result = await collection.insertOne(data); // Insert the data into MongoDB

    client.close(); // Close the connection
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ success: false, error: 'Failed to insert data.' });
  }
}
