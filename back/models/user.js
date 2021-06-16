import mongoose from 'mongoose';

mongoose.pluralize(null);

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /[A-Za-z]\w+/,
  },
  userPassword: {
    type: String,
    required: true,
    minlength: 8,
  },
});

export default mongoose.model('User', UserSchema);
