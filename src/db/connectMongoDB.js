import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');
  } catch {
    process.exit(1);
  }
}
