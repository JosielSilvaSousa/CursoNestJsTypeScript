import { Inject,Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CityEntity } from './entity/city.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CacheService} from '../cache/cache.service';
@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository:Repository<CityEntity>,
       
        private readonly cacheService : CacheService,
    ){}
    async getAllCity():Promise<CityEntity[]>{
        return this.cityRepository.find();
    }

    async getCityByStateId(state_id: number): Promise<CityEntity[]> {
        return this.cacheService.getCache<CityEntity[]>(`state_${state_id}`, () =>
          this.cityRepository.find({
            where: {
              state_id,
            },
          }),
        );
      }


}
