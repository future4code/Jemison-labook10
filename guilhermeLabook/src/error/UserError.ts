import { CustomError } from "./CustomError";

export class InvalidEmailUser extends CustomError{
    constructor(){
        super(400, "Email invalido")
    }
}

export class InvalidPassawordUser extends CustomError{
    constructor(){
        super(400, "Senha deve conter no minimo 5 caracteries.")
    }
}

export class InvalidDataUser extends CustomError{
    constructor(){
        super(400, "Dados invalido!")
    }
}