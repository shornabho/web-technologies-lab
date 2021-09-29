import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    author: String,
    bindingType: String,
    description: String,
    sellingPrice: Number,
    mrp: Number,
    bookImages: {
        frontCover: String,
        otherImages: [String]
    },
    starRating: Number,
    numberOfRatings: Number,
    numberOfPages: Number,
    language: String,
    publisher: String,
    datePublished: Date,
    dimensions: {
        length: Number,
        breadth: Number,
        height: Number,
        unit: String
    },
    isbn10: String,
    isbn13: String
});

const Book = mongoose.model('Book', BookSchema);

export default Book;