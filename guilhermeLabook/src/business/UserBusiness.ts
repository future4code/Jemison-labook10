import { UserDatabase } from './../data/UserDataBase';
import { generateID } from './../services/GenerateId';
import { CreateUserDTO, InsertUserDTO } from "../model/UsersDTO"
    
export class UsersBusiness{
   
   async create({name, email, password}:CreateUserDTO) :Promise<void>{

      if (!name || !email || !password) {
         throw new Error('"name", "email" and "password" must be provided')
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

   }

   async users () :Promise<CreateUserDTO> {

      const userDataBase = new UserDatabase()
      return userDataBase.users()
  
   }
}