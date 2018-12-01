import express from 'express';
import usersRoute from './users';

const router = express.Router();

/* 
  Index endpoints.
  Each of those endpoints should have it's own file, with it's own endpoints.
  This way, the code can be more readable and reusable.
*/
router.get('/', (req, res) => res.send('Server is up to date =)')); // Main endpoint
router.use('/users', usersRoute)

export default router;