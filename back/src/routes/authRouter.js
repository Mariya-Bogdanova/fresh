/* eslint-disable import/extensions */
import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../../models/user.js';

const router = express.Router();

router
  .route('/signup')
  .post(async (req, res) => {
    try {
      const { userName, userPassword } = req.body;
      const userDB = await UserModel.findOne({ userName });
      if (!userDB) {
        const hashedPassword = await bcrypt.hash(userPassword, +process.env.SALT_ROUNDS ?? 10);
        await UserModel.create({
          userName,
          userPassword: hashedPassword,
        });
        return res.end();
      }
      return res.status(401).end();
    } catch (err) {
      console.error(err);
      return res.status(401).end();
    }
  });

router.route('/login')
  .post(async (req, res) => {
    try {
      const { userName, userPassword } = req.body;
      const user = await UserModel.findOne({ userName });
      const isValidPassword = user && await bcrypt.compare(userPassword, user.userPassword);
      if (isValidPassword) {
        req.session.user = {
          // eslint-disable-next-line no-underscore-dangle
          userName, _id: user._id,
        };
        return res.end();
      }
      return res.status(401).end();
    } catch (err) {
      console.error(err);
      return res.status(401).end();
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    try {
      if (req.session) {
        req.session.destroy(() => {
          res.clearCookie('sid');
          res.end();
        });
      } else {
        res.end();
      }
    } catch (err) {
      console.error(err);
    }
  });

export default router;
