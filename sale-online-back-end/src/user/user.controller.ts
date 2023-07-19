import { Body,Controller,Get,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import{CreateUserDto} from './dto/CreateUser.dto';
import {UserService} from './user.service'
import {UserEntity} from './interfaces/user.entity';
import { ReturnUserDto } from './dto/returnUser.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

  @UsePipes(ValidationPipe)  //Valida os tipos dos campos pelo Pipes. 
  @Post()
   async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity>{
    return this.userService.createUser(createUser);
    // return {
    //     ...createUser,
    // password:undefined};//Não retorna o password de retorno.
   }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]>{
   return   (await this.userService.getAllUser()).map(
    (userEntity) => new ReturnUserDto(userEntity),
    );

}

}
