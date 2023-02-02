import mongoose from 'mongoose';

const schema = mongoose.Schema({
    emri: String,
    email: String,
    mesazhi: String
});

const contactModel = mongoose.model("contacts", schema);

export default contactModel;