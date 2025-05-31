import { Router } from "express";
import { createOrder, createZayavka } from "../controllers/Order.js";
// import { auth } from "../middleware/auth.js";

const orderRouter = Router();

// orderRouter.get('/', getOrders)
// orderRouter.get('/:id', getOrder)
orderRouter.post('/', createOrder)
orderRouter.post('/zayavka', createZayavka)
// orderRouter.patch('/:id', updateOrder)
// orderRouter.delete('/:id', deleteOrder)

export default orderRouter