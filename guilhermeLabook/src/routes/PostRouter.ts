import { PostController } from './../controller/PostController';
import express from 'express'

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/post", postController.create)