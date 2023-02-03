import { CustomError } from './../error/CustomError';
import { FriendDataBase } from './../data/FriendDataBase';
import { FriendDTO } from "../model/FriendDTO";
import { InvalidIdFriend } from '../error/FriendError';

export class FriendBusiness {

    async friend ({user, friendship}:FriendDTO) :Promise<void>{
        try{

            if(!user || !friendship){
                throw new InvalidIdFriend
            }

            const friend: FriendDTO = ({
                user,
                friendship
            })

            const friendDatabase = new FriendDataBase()
            await friendDatabase.friend(friend)

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }

    async unfriend ({user, friendship}:FriendDTO):Promise<void>{
        try{

            if(!user && !friendship){
                throw new InvalidIdFriend
            }

            const unfriend: FriendDTO = ({
                user,
                friendship
            })

            const unfriendDatabase = new FriendDataBase()
            await unfriendDatabase.unfriend(unfriend)

        }catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }
}