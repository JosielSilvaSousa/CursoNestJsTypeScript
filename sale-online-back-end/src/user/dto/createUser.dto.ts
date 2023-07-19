import { IsString } from "class-validator";

export class CreateUserDto{
 @IsString() //Usado para validar o tipo de campo.
 name: string;

 @IsString()
 email: string;

 @IsString()
 phone: string;

 @IsString()
 cpf:string;

 @IsString()
 password:string;
}