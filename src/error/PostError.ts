import { CustomError } from "./CustomError";

export class InvalidDataPost extends CustomError{
    constructor(){
        super(400, "Dados invalido!")
    }
}

export class InvalidIdPost extends CustomError{
    constructor(){
        super(400, "ID do post obrigatório!")
    }
}