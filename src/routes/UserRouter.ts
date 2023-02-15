import { UsersController } from './../controller/UserController';
import express from 'express'

export const userRouter = express.Router()

const userController = new UsersController()

userRouter.post("/create", userController.create)
