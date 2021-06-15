import mongoose from 'mongoose';

mongoose.pluralize(null);

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  daysOfLife: {
    type: Number,
    required: true,
  },
  dateOfManufacture: Date,
  shelfLife: Date,
});

export default mongoose.model('Product', ProductSchema);
