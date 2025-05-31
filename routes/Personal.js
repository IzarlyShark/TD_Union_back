import { Router } from "express";
import { login, create, logout, update, getInfo, deleteUser } from "../controllers/Personal.js";
import { auth } from "../middleware/auth.js";

const personalRouter = Router();

personalRouter.get('/', auth, getInfo)
personalRouter.get('/logout/:id', auth, logout)
personalRouter.post('/login', login)
personalRouter.post('/registry', create)
personalRouter.patch('/update/:id', auth, update)
personalRouter.delete('/delete/:id', auth, deleteUser)

export default personalRouter