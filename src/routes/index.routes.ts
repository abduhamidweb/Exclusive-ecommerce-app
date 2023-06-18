import { Router } from 'express';
import userRoutes from "../routes/user.routes.js";
import postRoutes from "../routes/post.routes.js";
const router = Router();
router.use('/users', userRoutes)
router.use('/post', postRoutes);
export default router;
