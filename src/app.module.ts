import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { user } from './models/users.model';
import { data } from './models/data.model';
import { DataModule } from './data/data.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect:'postgres',
    host:'localhost',
    database:'dbtest',
    username:'postgres',
    password:'123456',
    port:5432,
    models:[user,data],
    define:{
      timestamps:false
    },
    synchronize:false,
  }), UsersModule, DataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
