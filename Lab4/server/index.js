import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import books from './routers/books.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
const API_BASE_URL = process.env.API_BASE_URL || 'api';

const app = express();

app.use(`/${API_BASE_URL}/books`, books.router);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)))
    .catch((error) =>
        console.error(error.message));

