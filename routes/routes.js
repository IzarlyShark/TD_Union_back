import { Router } from "express"
import userRouter from './Personal.js'
import orderRouter from "./Order.js"

const mainRouter = Router()

mainRouter.use('/personal', userRouter)
mainRouter.use('/order', orderRouter)


export default mainRouter
