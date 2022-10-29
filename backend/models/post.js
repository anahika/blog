const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    meta: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tags: [String],
    thumbnail: {
        type: Object,
        Url: {
            type: URL,
            // required: true
        },
        public_id: {
            type: String,
            // required: true
        }
    },
    author: {
        type: String,
        default: "Anshika Kapoor"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema)