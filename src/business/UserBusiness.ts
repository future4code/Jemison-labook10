import { CustomError } from './../error/CustomError';
import { InvalidDataUser, InvalidPassawordUser, InvalidEmailUser } from './../error/UserError';
import { UserDatabase } from './../data/UserDataBase';
import { generateID } from './../services/GenerateId';
import { CreateUserDTO, InsertUserDTO } from "../model/UsersDTO"
    
export class UsersBusiness{
   
   async create({name, email, password}:CreateUserDTO) :Promise<void>{
      try{

         if (!name || !email || !password) {
            throw new InvalidDataUser
         }

         if(password.length < 4){
            throw new InvalidPassawordUser
         }

         if(email.includes("@")){
            throw new InvalidEmailUser
         }

         const id = generateID()
         
         const user: InsertUserDTO = ({
            id,
            name,
            email,
            password
         })

         const userDatabase = new UserDatabase()
         await userDatabase.create(user)

      }catch (error: any) {
         throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
      }
   }

}