export interface AuthenticationDataDTO  {
    id: string
}
 
export interface  InsertUserDTO  {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface  CreateUserDTO  {
    name: string,
    email: string,
    password: string
}