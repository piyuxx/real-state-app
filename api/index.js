import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import User from './models/user.model.js';
import bodyParser from 'body-parser'; // Import bodyParser

dotenv.config();
mongoose.connect(process.env.MONG0_URI)
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch((err) => {
        console.log(err)
    })
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.listen(5000, () => {
    console.log('Server is running on port 3000s')
})

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);
