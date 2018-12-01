/* 
  Users route.
  Route for user management. Splitting files like this, 
  code get reusable and readable. Index route just need
  to import this file and BOOM, magic happens.
*/

import express from 'express'

import MysqlController from '../controllers/mysql'
import UsersController from '../controllers/users';

const router = express.Router();

const mysqlController = new MysqlController();
const usersController = new UsersController(mysqlController);

router.post('/', (req, res) => usersController.createUser(req, res));
router.get('/', (req, res) => usersController.getAllUsers(req, res))

export default router;