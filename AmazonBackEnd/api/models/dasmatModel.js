import mongoose from 'mongoose';


const schema = mongoose.Schema({
    emri: String,
    qyteti: String,
    adresa: String,
    foto: String,
});

const dasmatModel = mongoose.model("dasmats", schema);

export default dasmatModel;