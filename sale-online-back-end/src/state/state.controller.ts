import { Controller,Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entity/state.entity';
@Controller('state')
export class StateController {
    constructor(private readonly cityService: StateService){}
    @Get()
    async getAllState(): Promise<StateEntity[]>{
     return   this.cityService.getAllState();
  }
}