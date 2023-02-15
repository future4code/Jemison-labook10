import { CustomError } from './../error/CustomError';
import { FriendDTO } from "../model/FriendDTO";
import { BaseDatabase } from "./BaseDataBase";

export class FriendDataBase extends BaseDatabase{
    private static TABLE_FRIEND = "labook_friend"

    async friend ({user, friendship} :FriendDTO) :Promise<void>{
        try{

            await FriendDataBase.connection.insert({
                user,
                friendship
            }).into(FriendDataBase.TABLE_FRIEND)

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

    async unfriend({user, friendship} :FriendDTO) :Promise<void>{
        try{

            await FriendDataBase.connection
            .delete()
            .from(FriendDataBase.TABLE_FRIEND)
            .where("user", user)
            .andWhere("friendship", friendship)
        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

}