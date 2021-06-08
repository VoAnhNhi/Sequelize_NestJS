import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { data } from 'src/models/data.model';

@Injectable()
export class DataService {
    constructor(@InjectModel(data) private readonly dataModel: typeof data){}

    findAll():Promise<data[]>{
        return this.dataModel.findAll();
    }

    findDataByID(id:number):Promise<data>{
        return this.dataModel.findOne({
            where:{
                id
            }
        })
    }

    insertData(data:data){
        this.dataModel.create(data);
    }

    deleteData(id:number){
        this.dataModel.destroy({
            where:{
                id
            }
        })
    }

    updateData(id:number,data:data){
        this.dataModel.update(data,{
            where:{
                id
            }
        })
    }

    

    
}
