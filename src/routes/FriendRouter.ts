import { FriendController } from './../controller/FriendController';
import express from 'express'

export const friendRouter = express.Router()

const frindController = new FriendController()

friendRouter.post("/friendship", frindController.friend)

