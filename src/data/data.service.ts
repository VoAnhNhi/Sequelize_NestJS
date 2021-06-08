import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { data } from 'src/models/data.model';

@Injectable()
export class DataService {
    constructor(@InjectModel(data) private readonly dataModel: typeof data){}

    async findAll():Promise<data[]>{
        return this.dataModel.findAll();
    }

    async insertData(data:data){
        this.dataModel.create(data);
    }
}
