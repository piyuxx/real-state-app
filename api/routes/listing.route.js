import express from 'express'
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js'
router.post('/create', verifyToken, createListing)
router.delete('/delete/:id', verifyToken, deleteListing)
router.post('/update/:id', verifyToken, updateListing);
export default router;