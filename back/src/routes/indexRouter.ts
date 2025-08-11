import { Router } from 'express';
import productRoutes from './product.routes';
import categoryRoutes from './category.routes';
import genderRoutes from './gender.routes';

const router = Router();

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/genders', genderRoutes);

export default router;
