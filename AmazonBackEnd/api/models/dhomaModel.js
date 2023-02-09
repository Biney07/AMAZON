import mongoose from 'mongoose';

const schema = mongoose.Schema({
    numri: Number,
    pershkrimi: String,
    foto1: String,
    foto2: String,
    foto3: String,
    cmimi : Number
});

const dhomaModel = mongoose.model("dhomat", schema);

export default dhomaModel;