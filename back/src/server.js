/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import productsRouter from './routes/productsRouter.js';

mongoose.set('useFindAndModify', false);
export default mongoose.connect('mongodb://localhost:27017/fresh', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

app.use(express.json());

app.use('/api', productsRouter);

app.listen(process.env.PORT ?? 3001);
