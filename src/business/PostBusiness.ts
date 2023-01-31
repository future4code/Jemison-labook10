import { CustomError } from './../error/CustomError';
import { AuthenticationDataDTO, CreatePostDTO, InsertPostDTO } from './../model/PostDTO';
import { generateID } from '../services/GenerateId';
import { PostDataBase } from './../data/PostDataBase';


export class PostBusiness {

   async create({photo, description, type, authorId}: CreatePostDTO): Promise<void>{
      try{

         if(!photo || !description || !type || !authorId){
            throw new Error("Informações incorretas!");
         }

         const post : InsertPostDTO ={
            id: generateID(),
            photo,
            description,
            type,
            createdAt: new Date(),
            authorId
         }

         const postDataBase = new PostDataBase()
         await postDataBase.create(post)

      }catch (error: any) {
         throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
      }
   }

   
   async allPost() :Promise<CreatePostDTO>{
      try{

         const allDatabase = new PostDataBase()
         return allDatabase.allPost()

      }catch (error: any) {
         throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
      }
   }


   async idPost({id}:AuthenticationDataDTO) :Promise<AuthenticationDataDTO[]>{
      try{
         if(!id){
            throw new Error("Passe um Id.");
         }

         const postId: AuthenticationDataDTO = {
            id : id
         }

         const idDatabase = new PostDataBase()
         return await idDatabase.idPost(postId)

      }catch (error: any) {
         throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
      }
   }

} 