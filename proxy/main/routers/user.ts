import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';

const userRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

userRouter.get('/:id', (req, res) => userController.getUser(req, res))

export default userRouter;