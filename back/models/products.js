import mongoose from 'mongoose';

mongoose.pluralize(null);

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  expiryDate: Number,
  dateOfManufacture: Date,
  shelfLife: Date,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Product', ProductSchema);
