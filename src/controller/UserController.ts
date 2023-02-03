import { UsersBusiness } from './../business/UserBusiness';
import { CustomError } from './../error/CustomError';
import { Request, Response } from "express";

export class UsersController {
    async create(req:Request, res:Response):Promise<void>{
        try{

            const userBusiness = new UsersBusiness()
            await userBusiness.create({ 
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })

            res.status(201).send({ message: "Usuario criado com sucesso" });
        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

}

 