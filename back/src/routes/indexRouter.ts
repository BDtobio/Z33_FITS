import { Router } from 'express';
import productRoutes from './product.routes';
import categoryRoutes from './category.routes';
import genderRoutes from './gender.routes';
import auth from "./auth.routes";
const router = Router();

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/genders', genderRoutes);
router.use("/auth", auth);
export default router;
