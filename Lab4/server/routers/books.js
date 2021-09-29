import express from 'express';
import cors from 'cors';

import { addBook, deleteBook, getAllBooks, getBook, updateBook } from '../controllers/books.js';

const router = express.Router();

// Router Config
router.use(express.json({ limit: "30mb", extended: true }));
router.use(express.urlencoded({ limit: "30mb", extended: true }));
router.use(cors());

// Routes
router.get('/:id', getBook);
router.get('/', getAllBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default { router };