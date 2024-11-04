// global.d.ts
import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined; // Allow undefined as a possible type
}

// Turn this file into a module by adding an empty export statement
export {};
