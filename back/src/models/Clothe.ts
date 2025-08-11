import mongoose, { Schema, Document } from 'mongoose';

export interface IClothe extends Document {
  id: number;
  name: string;
  brand?: string;
  price: number;
  stock: number;
  categoryId: number;
  description: string;
  image: string;
}

const ClotheSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoryId: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Clothe = mongoose.model<IClothe>('Clothe', ClotheSchema);

export default Clothe;
