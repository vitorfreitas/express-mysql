import express from 'express';
import mysql from '../controllers/mysql';
import UsersController from '../controllers/users';

const router = express.Router();
const usersController = new UsersController(mysql);

router.post('/', (req, res) => usersController.createUser(req, res));
router.get('/', (req, res) => usersController.getAllUsers(req, res));

export default router;
