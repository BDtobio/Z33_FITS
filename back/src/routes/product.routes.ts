import { Router } from 'express';
import { 
  getProducts, 
  getProduct, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProductsByCategoryController 
} from '../controllers/product.controller';

const router = Router();

// Primero las rutas específicas
router.get('/category/:id', getProductsByCategoryController);

// Luego las rutas generales
router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
