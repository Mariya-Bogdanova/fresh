/* eslint-disable import/extensions */
import express from 'express';
import session from 'express-session';
import fs from 'fs';
import sessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import '../misc/env.js';
import '../misc/db.js';
import notFoundMiddleware from '../middlewares/notfound.js';
import errorMiddleware from '../middlewares/error.js';
import authMiddleware from '../middlewares/auth.js';
import productsRouter from './routes/productsRouter.js';
import authRouter from './routes/authRouter.js';

const app = express();
const FileStore = sessionFileStore(session);

app.use(express.json());
app.use(express.static('../../front/build'));
app.set('session cookie name', 'sid');
app.use(cookieParser());
const sessionConfig = {
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    secret: process.env.SESSION_SECRET,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 15,
    secure: process.env.NODE_ENV === 'production',
  },
};
app.use(session(sessionConfig));

app.use('/auth', authRouter);
app.use(authMiddleware);
app.use('/api', productsRouter);

try {
  const indexHtml = fs.readFileSync('../../front/build/index.html', 'utf-8');
  app.get('*', async (req, res) => {
    res.send(indexHtml);
  });
} catch (error) {
  console.log(error.message);
}
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.listen(process.env.PORT ?? 3001);
