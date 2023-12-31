import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId: {
        type: "String",
        required: true
    },
    title: {
        type: "String",
        required: true
    },
    desc: {
        type: "String",
        required: true
    },
    totalStars: {
        type: "String",
        default: 0,
    },
    totalNumber: {
        type: "String",
        default: 0,
    },
    cat: {
        type: "String",
        required: true
    },
    price: {
        type: "String",
        required: true
    },
    cover: {
        type: "String",
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    shortTitle: {
        type: "String",
        required: true
    },
    shortDesc: {
        type: "String",
        required: true
    },
    deliveryTime: {
        type: "String",
        required: true
    },
    revisionNumber: {
        type: "String",
        required: true
    },
    features: {
        type: [String],
        required: false
    },
    sales: {
        type: "String",
        default: 0,
    },
},{ 
    timestamps: true
});

export default mongoose.model("Gig", GigSchema)
