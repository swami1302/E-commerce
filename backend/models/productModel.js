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
        type: Array,
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
    subcategory: {
        type: String,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    bestseller: {
        type: Boolean,
        required: true,
    },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;