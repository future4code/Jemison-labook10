import { CreateUserDTO, InsertUserDTO } from "../model/UsersDTO";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase{
    private static TABLE_USER = "labook_users"

    async create({id, name, email, password}:InsertUserDTO):Promise<void>{

        await UserDatabase.connection.insert({
            id,
            name,
            email,
            password
        }).into(UserDatabase.TABLE_USER)
    }

    async users () :Promise<CreateUserDTO> {

        return await UserDatabase.connection.select().from(UserDatabase.TABLE_USER)
    
    }
}