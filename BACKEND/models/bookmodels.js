import mongoose from "mongoose";

// creating a book model with mongoose. using objects
const BSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishedYear: {
            type: Number,
            required: true,
        },
    },
    {
        // time of update, time of deletion, .. etc.,
        timestamps: true,
    }
)

// I created a schema object, can use title, author, year here in the place of Bschema .. (clean code :)..)
export const Book = mongoose.model('Book', BSchema);