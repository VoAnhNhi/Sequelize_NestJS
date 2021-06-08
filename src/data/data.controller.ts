import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { data } from 'src/models/data.model';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor( private readonly dataService: DataService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getData():Promise<data[]>{
        return await this.dataService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getDataByID(@Param('id') id:number):Promise<any>{
        var data = await this.dataService.findDataByID(id);
        if(!data){
            return{
                message:"Data not found !!!"
            }
        }
        return data;
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add')
    async add(@Body() data:data){
        await this.dataService.insertData(data);
        return {
            message:"Insert data success !!!"
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteDataByID(@Param('id') id:number){
        var data = await this.dataService.findDataByID(id);
        if(!data){
            return{
                message:" Data need delete not exist !!!"
            }
        }
        else{
            await this.dataService.deleteData(id);
            return{
                message:" Delete data success !!!"
            }
        }
        
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateData(@Param('id') id:number, @Body() data:data){
        await this.dataService.updateData(id,data);
    }
}
