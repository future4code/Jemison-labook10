import { CustomError } from './../error/CustomError';
import { AllPostFriends } from '../model/UsersDTO';
import { AuthenticationDataDTO, CreatePostDTO, InsertPostDTO } from './../model/PostDTO';
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase{
    private static TABLE_POST = "labook_posts" as any
    private static TABLE_FRIEND = "labook_friend" as any


    async create({id, photo, description, type, createdAt, authorId}: InsertPostDTO): Promise<void>{
        await PostDataBase.connection.insert({
            id,
            photo,
            description,
            type,
            created_at:createdAt,
            author_id:authorId
        }).into(PostDataBase.TABLE_POST)
    }

    async allPost() :Promise<CreatePostDTO>{
        return await PostDataBase.connection.select().from(PostDataBase.TABLE_POST)
    }

    async idPost({id}:AuthenticationDataDTO) :Promise<AuthenticationDataDTO[]>{
        return await PostDataBase.connection.select().from(PostDataBase.TABLE_POST).where("id", id)
    }

    async postFrined({id, user}:AllPostFriends) :Promise<void[]> {
        try{

            const result =  await PostDataBase.connection
            .select()
            .from(PostDataBase.TABLE_FRIEND)
            .innerJoin(PostDataBase.TABLE_POST)
            .on(PostDataBase.TABLE_FRIEND.user , PostDataBase.TABLE_POST.id )

            console.log(result[0])
            return result[0]
        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }
}