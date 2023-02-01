import { FriendBusiness } from "../business/FriendBusiness"
import { Request, Response } from "express"
import { CustomError } from "../error/CustomError"

export class FriendController {

    async friend (req:Request, res:Response):Promise<void>{

        try{

            const frindBusiness = new FriendBusiness()
            await frindBusiness.friend({
                user: req.body.user,
                friends: req.body.friends
            })

            res.status(200).send("Parabéns pela nova amizade!")

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
         }
    }
}