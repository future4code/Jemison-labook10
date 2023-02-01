import { FriendDTO } from "../model/FriendDTO";
import { BaseDatabase } from "./BaseDataBase";

export class FriendDataBase extends BaseDatabase{
    private static TABLE_FRIEND = "labook_friend"

    async friend ({user, friends} :FriendDTO) :Promise<void>{

        await FriendDataBase.connection.insert({
            user,
            friends
        }).into(FriendDataBase.TABLE_FRIEND)
    }
}