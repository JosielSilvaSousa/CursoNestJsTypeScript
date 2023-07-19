import { Module } from '@nestjs/common';
import {CacheModule} from '../cache/cache.module';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entity/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
  CacheModule,TypeOrmModule.forFeature([CityEntity])], 
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
