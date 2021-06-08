import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { data } from 'src/models/data.model';

@Module({
  imports:[SequelizeModule.forFeature([data])],
  providers: [DataService],
  controllers: [DataController]
})
export class DataModule {}
