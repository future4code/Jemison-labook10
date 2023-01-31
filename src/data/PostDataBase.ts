import { AuthenticationDataDTO, CreatePostDTO, InsertPostDTO } from './../model/PostDTO';
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase{
    private static TABLE_POST = "labook_posts"

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
}