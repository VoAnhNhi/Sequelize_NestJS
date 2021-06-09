import {Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { user } from 'src/models/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService:UsersService,
        private jwtService:JwtService
    ){}

    async validateUser(username:string,password:string):Promise<user>{
        var user = await this.userService.findUser(username);
        if(user &&  user.password === password){
            return user;
        }
        return null;
    }

    async login(user:any){
        var payload = {username:user.username,password:user.password};
        return {
            access_token : this.jwtService.sign(payload),
        };
    }

    async signup(username:string,password:string){
        var newUser = {username:username,password:password};
        var user = await this.userService.findUser(username);
        if(user ){
            return {
                message:"User already exist !!!"
            }
        }
        await this.userService.addUser(newUser);
        return {
            message:"Add user success !!!"
        }
    }
}
