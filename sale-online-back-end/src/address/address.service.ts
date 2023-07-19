import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entity/address.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository:Repository<AddressEntity>,
    ){}
    async getAllUser():Promise<AddressEntity[]>{
        return this.addressRepository.find();
    }
}
