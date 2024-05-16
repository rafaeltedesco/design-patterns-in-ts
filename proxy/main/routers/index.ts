import { Router } from 'express';
import userRouter from './user';

const appRouter = Router();

appRouter.get('/health', (req, res) => res.json({ message: 'OK' }));
appRouter.use('/user', userRouter);


export default appRouter;