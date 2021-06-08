import {Table,Column,Model,PrimaryKey, DataType} from 'sequelize-typescript';
@Table
export class data extends Model<data>{
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        primaryKey:true,
        unique:true
    })
    id:number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    email:string;
}