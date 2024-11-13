import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    bestSeller: {
        type: Boolean,
        required: true,
    },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;