import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { UserServiceProxyCached } from '../services/UserServiceProxyCached';
import { UserServiceProxyRetry } from '../services/UserServiceProxyRetry';

const userRouter = Router();

const userService = new UserServiceProxyRetry(new UserService());
const userController = new UserController(userService);

userRouter.get('/:id', (req, res) => userController.getUser(req, res))

export default userRouter;