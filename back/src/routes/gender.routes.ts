import { Router } from 'express';
import * as genderController from '../controllers/gender.controller';

const router = Router();

router.get('/', genderController.getGenders);
router.get('/:id', genderController.getGender);
router.post('/', genderController.createGender);
router.put('/:id', genderController.updateGender);
router.delete('/:id', genderController.deleteGender);

export default router;
