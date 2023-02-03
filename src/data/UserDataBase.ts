import { CustomError } from './../error/CustomError';
import { InsertUserDTO } from "../model/UsersDTO";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase{
    private static TABLE_USER = "labook_users" as any


    async create({id, name, email, password}:InsertUserDTO):Promise<void>{
        try{

            await UserDatabase.connection.insert({
                id,
                name,
                email,
                password
            }).into(UserDatabase.TABLE_USER)
        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

}