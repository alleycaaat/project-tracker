import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({


})

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User