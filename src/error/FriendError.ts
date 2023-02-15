import { CustomError } from "./CustomError";

export class InvalidIdFriend extends CustomError{
    constructor(){
        super(400, "Informe os ID's!")
    }
}