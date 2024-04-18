import express from 'express'
import { createListing, deleteListing } from '../controllers/listing.controller.js';
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js'
router.post('/create', verifyToken, createListing)
router.delete('/delete/:id', verifyToken, deleteListing)
export default router;