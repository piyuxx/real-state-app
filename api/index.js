import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

import User from './models/user.model.js';
import bodyParser from 'body-parser'; // Import bodyParser
import cookieParser from 'cookie-parser';
import path from 'path'

dotenv.config();
mongoose.connect(process.env.MONG0_URI)
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch((err) => {
        console.log(err)
    })

const ___dirname = path.resolve();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.listen(5000, () => {
    console.log('Server is running on port 3000s')
})

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter)
app.use(express.static(path.join(___dirname), '/users/build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(___dirname, 'users', 'build', 'index.html'))
})
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});