import {Table,Column,Model, DataType} from 'sequelize-typescript';

@Table
export class user extends Model<user>{
    @Column({
        type:DataType.STRING,
        allowNull:false,
        primaryKey:true
    })
    username:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    password:string;
}