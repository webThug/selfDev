import mongoose from 'mongoose';
import {ObjectId} from 'mongodb';

const User = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, unique: true},
  password: {type: String, required: true},
  posts: [{type: ObjectId, ref: 'Post'}],
  roles: [{type: String, ref: 'Role'}],
  profile: {type: ObjectId, ref: 'Profile'}
});

export default mongoose.model('User', User);