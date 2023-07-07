import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import{CreateUserDto} from './dto/CreateUser.dto';
import {UserEntity} from './interfaces/user.entity';
import {hash} from 'bcrypt';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>,
    ){}
    
    async createUser(createUserDto:CreateUserDto):Promise<UserEntity>{
        const saltOrRounds = 10;

        const passwordHash = await hash(createUserDto.password, saltOrRounds);
        
        return this.userRepository.save({
            ...createUserDto,
            password:passwordHash   
        })
        // const user:UserEntity={
        //     ...createUserDto,
        //     id:this.users.length +1,
        //     password:passwordHash
        // }
        // this.users.push(user);
        // return user;
    }

    async getAllUser():Promise<UserEntity[]>{
        return this.userRepository.find();
    }
}
