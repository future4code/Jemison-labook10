import { CreatePostDTO, InsertPostDTO } from './../model/PostDTO';
import { generateID } from '../services/GenerateId';
import { PostDataBase } from './../data/PostDataBase';


export class PostBusiness {
   async create({photo, description, type, authorId, }: CreatePostDTO): Promise<void>{

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
   }
}

 
   //  try {
   //     let message = "Success!"
 
   //     const { id } = req.params
 
   //     const queryResult: any = await connection("labook_posts")
   //        .select("*")
   //        .where({ id })
 
   //     if (!queryResult[0]) {
   //        res.statusCode = 404
   //        message = "Post not found"
   //        throw new Error(message)
   //     }
 
   //     const post: post = {
   //        id: queryResult[0].id,
   //        photo: queryResult[0].photo,
   //        description: queryResult[0].description,
   //        type: queryResult[0].type,
   //        createdAt: queryResult[0].created_at,
   //        authorId: queryResult[0].author_id,
   //     }
 
   //     res.status(200).send({ message, post })
 
   //  } catch (error:any) {
   //     let message = error.sqlMessage || error.message
   //     res.statusCode = 400
   //     res.send({ message })
   //  }
 
 