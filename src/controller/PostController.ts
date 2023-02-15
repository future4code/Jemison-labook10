import { PostBusiness } from './../business/PostBusiness';
import { CustomError } from './../error/CustomError';
import { Request, Response } from "express";

export class PostController {
    async create(req:Request, res:Response):Promise<void>{
        try{
            
            const postBusiness = new PostBusiness()
            await postBusiness.create({
                photo: req.body.photo,
                description: req.body.description,
                type:req.body.type,
                authorId: req.body.authorId
            })

            res.status(201).send({ message: "Post criado com sucesso" });
        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }

    }

    async allPost(req:Request, res:Response) :Promise<void>{
        try{

            const idBusiness = new PostBusiness()
            const posts = await idBusiness.allPost()

            res.status(200).send(posts)

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

    async idPost(req:Request, res:Response) :Promise<void>{
        try{

            const idPostBusiness = new PostBusiness()
            await idPostBusiness.idPost({id: req.body.id})

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

    async postFrined(req: Request, res: Response) :Promise<void> {
        try{

        const postBusiness = new PostBusiness()
        const result = await postBusiness.postFrined({
            id:req.body,
            user:req.body
        })
        res.status(200).send(result)

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }
}