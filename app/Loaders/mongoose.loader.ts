import mongoose from 'mongoose';

export default async () => {
  try {
    const url: string = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/testCounterDB';
    await mongoose.connect(url, {});
  } catch (e) {
    throw e;
  }
}