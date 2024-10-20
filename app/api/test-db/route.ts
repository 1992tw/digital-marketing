// app/api/test-db/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db('test'); // replace 'test' with your actual DB name

    // Example collection fetch (replace 'collection_name' with your collection)
    const data = await db.collection('collection_name').find({}).limit(10).toArray();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Narrow the error type
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message; // Extract the message from the Error object
    }

    console.error('Database connection error:', errorMessage);
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
