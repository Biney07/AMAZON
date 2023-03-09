import { number } from 'joi';
import mongoose from 'mongoose';


const schema = mongoose.Schema({
    numri: Number,
    numriMusafireve: Number,
    foto: String,
});

const dasmatModel = mongoose.model("dasmats", schema);

export default dasmatModel;