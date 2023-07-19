import { Controller,Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressEntity } from './entity/address.entity';
@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){}
    @Get()
    async getAllUser(): Promise<AddressEntity[]>{
     return   this.addressService.getAllUser();
  }
}