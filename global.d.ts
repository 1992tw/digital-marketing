// global.d.ts
declare global {
  var _mongoClientPromise: Promise<MongoClient>; // This must be declared in the global scope
}

// Turn this file into a module by adding an empty export statement
export {};