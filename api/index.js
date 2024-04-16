import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONG0_URI)
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch((err) => {
        console.log(err)
    })
const app = express();
app.listen(5000, () => {
    console.log('Server is running on port 3000s')
})

app.use('/api/user', userRouter);
// app.get('/test', (req, res) => {
//     res.json({
//         message: "Hello World",
//     })
// })