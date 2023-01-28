import mongoose from 'mongoose';

const schema = mongoose.Schema({
    emri: String,
    email: String,
    mesazhi: String
});

const model = mongoose.model("contacts", schema);

export default model;