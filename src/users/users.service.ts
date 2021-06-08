import { Injectable,Inject } from '@nestjs/common';
import { InjectModel} from '@nestjs/sequelize';
import { user } from 'src/models/users.model';
@Injectable()
export class UsersService {
    constructor(@InjectModel(user) private readonly userModel:typeof  user){
    }
    async findOneUser(username: string):Promise<user>{
        return this.userModel.findOne({
            where:{
                username
            }
        })
    }
}