import { Router } from 'express';
import * as plantController from 'controllers/plantsController';

const router = Router();

router.get('/plants', plantController.getPlants);
router.get('/plants/:id', plantController.getPlant);
router.post('/plants', plantController.createPlant);
router.put('/plants/:id', plantController.updatePlant);
router.delete('/plants/:id', plantController.deletePlant);

export default router;
