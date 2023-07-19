import { Inject,Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {Cache} from 'cache-manager';
import { CityEntity } from './entity/city.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository:Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ){}
    async getAllCity():Promise<CityEntity[]>{
        return this.cityRepository.find();
    }

    async getCityByStateId(state_id:number):Promise<CityEntity[]>{
        const citiesCache : CityEntity[] = await this.cacheManager.get(`state_$(state_id)`);

        if(citiesCache){
            return citiesCache;
        }

        const cities = await this.cityRepository.find({
            where:{
                state_id,
            } 
        })
        // return this.cityRepository.find({
        //     where:{
        //         state_id,
        //     }

            
        // })
       
        await this.cacheManager.set(`state_$(state_id)`, cities);
        return cities;
    }
}
