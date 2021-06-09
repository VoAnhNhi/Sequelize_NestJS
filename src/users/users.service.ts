import { Injectable,Inject } from '@nestjs/common';
import { InjectModel} from '@nestjs/sequelize';
import { user } from 'src/models/users.model';
@Injectable()
export class UsersService {
    constructor(@InjectModel(user) private readonly userModel:typeof  user){
    }
    async findUser(username: string):Promise<user>{
        return this.userModel.findOne({
            where:{
                username
            }
        })
    }

    async addUser(newuser:any){
        return this.userModel.create(newuser);
    }
}
