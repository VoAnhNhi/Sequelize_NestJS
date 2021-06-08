import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports:[UsersModule,
        PassportModule,
    JwtModule.register({
        secret: jwtConstants.secretKey,
        signOptions:{
            expiresIn:'2m'
        }
    })
],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports:[AuthModule,JwtModule]
})
export class AuthModule {}
