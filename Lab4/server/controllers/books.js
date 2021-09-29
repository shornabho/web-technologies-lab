import mongoose from 'mongoose';
import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
    const books = await Book.find();

    res.status(200).send(books);
};

export const getBook = async (req, res) => {
    const id = req.params?.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: 'No book with that id!' });

    const book = await Book.findOne({ _id: id });

    if (book)
        res.status(200).send(book);
    else
        res.status(404).send({ message: 'No book with that id!' });
};

export const addBook = async (req, res) => {
    const book = req.body;

    const newBook = new Book(book);

    try {
        await newBook.save();
        res.status(201).send(newBook);
    }
    catch (error) {
        console.error(error);
        res.status(409).json({ error: error.message });
    }
};

export const updateBook = async (req, res) => {
    const id = req.params?.id;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: 'No book with that id!' });

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { ...book, _id: id }, { new: true });
        res.status(200).send(updatedBook);
    }
    catch (error) {
        res.status(409).send({ error: error.message });
    }
};

export const deleteBook = async (req, res) => {
    const id = req.params?.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: 'No book with that id!' });

    try {
        await Book.findByIdAndDelete(id);
        res.status(200).send({ message: 'Book deleted successfully!' });
    }
    catch (error) {
        res.status(409).send({ error: error.message });
    }
};