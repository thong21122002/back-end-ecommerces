const mongoose = require('mongoose');
const Product = require('./ProductModel');
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        comment: { type: String, required: true },
        // product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    },
    {
        timestamps: true
    }
);
const Review = mongoose.model("Review", userSchema);
module.exports = Review;