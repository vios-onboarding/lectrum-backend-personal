// Core
import { Schema, model } from 'mongoose';

// Document shape
const schema = new Schema({});

// Collection
export const orders = model('order', schema);
