
import { Router } from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, getProductsByCategoryController } from '../controllers/product.controller';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/category/:id', getProductsByCategoryController);

export default router;
