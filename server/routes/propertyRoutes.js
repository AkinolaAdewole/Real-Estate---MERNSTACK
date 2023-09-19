import express from 'express';

import { createProperty, deleteProperty, 
        updateProperty,getAllProperties, 
        getPropertyDetail 
       } from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.get('/:id',getPropertyDetail);
router.post('/',createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;