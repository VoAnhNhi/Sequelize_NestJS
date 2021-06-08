import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule} from '@nestjs/sequelize';
import { user } from 'src/models/users.model';
import { UsersController } from './users.controller';

@Module({
  imports:[SequelizeModule.forFeature([user])],
  providers: [UsersService],
  exports:[SequelizeModule,UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
