import { FriendDataBase } from './../data/FriendDataBase';
import { FriendDTO } from "../model/FriendDTO";

export class FriendBusiness {

    async friend ({user, friends}:FriendDTO) :Promise<void>{

        if(!user || !friends){
            throw new Error("Informações errada, tente novamente.");
        }

        const friend: FriendDTO = ({
            user,
            friends
        })

        const friendDatabase = new FriendDataBase()
        await friendDatabase.friend(friend)
    }
}