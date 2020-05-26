import express from 'express';
const router = express.Router();

import userCrl from '../controllers/users.controllers'

router.route('/')
    .get(userCrl.getUsers)
    .post(userCrl.createUser)

router.route('/:id')
    .delete(userCrl.deleteUser)

export default router;