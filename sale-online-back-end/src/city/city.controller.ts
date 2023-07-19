import { Controller,Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entity/city.entity';
@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService){}
    @Get()
    async getAllCity(): Promise<CityEntity[]>{
     return   this.cityService.getAllCity();
  }

  @Get('/:state_id')
  async getCityByStateId(@Param('state_id')state_id:number,
  ): Promise<CityEntity[]>{

    return this.cityService.getCityByStateId(state_id);
  }
}
