import { PostBusiness } from './../business/PostBusiness';
import { CustomError } from './../error/CustomError';
import { Request, Response } from "express";

export class PostController {
    async create(req:Request, res:Response):Promise<void>{
        try{
            
            const postBusiness = new PostBusiness
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
}