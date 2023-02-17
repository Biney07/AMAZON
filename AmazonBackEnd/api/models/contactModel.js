import mongoose from 'mongoose';

const schema = mongoose.Schema({
    emri: String,
    email: String,
    mesazhi: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
});

const contactModel = mongoose.model("contacts", schema);

export default contactModel;