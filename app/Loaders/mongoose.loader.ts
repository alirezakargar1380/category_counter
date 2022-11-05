import mongoose from 'mongoose';

export default async () => {
  try {
    const url: string = 'mongodb://127.0.0.1:27017/testYu';
    await mongoose.connect(url, {});
  } catch (e) {
    throw e;
  }
}