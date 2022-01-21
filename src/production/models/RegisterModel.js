import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: String,
        default: "YES",
    },
    avatar: {
        type: String,
        default: "No avatar"
    }

}, {
    timestamps: true
}, {
    collection: 'accounts',
})

export const RegisterModel = mongoose.model('accounts', schema);