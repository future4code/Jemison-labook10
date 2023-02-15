import { PostController } from './../controller/PostController';
import express from 'express'

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/create", postController.create)

postRouter.get("/", postController.allPost)

postRouter.get("/", postController.idPost)

postRouter.get("/", postController.postFrined)