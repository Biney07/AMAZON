import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    image: String,
    status:  Boolean, 
});

const foodModel = mongoose.model("food", schema);

export default foodModel;