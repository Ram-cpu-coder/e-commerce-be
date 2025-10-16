import express from 'express'
import { createOrderInquiry } from '../controllers/orderInquiryController.js';
const router = express.Router();

router.post('/order', createOrderInquiry)

export default router;