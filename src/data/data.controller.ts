import { Body, Controller, Get, Post } from '@nestjs/common';
import { data } from 'src/models/data.model';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor( private readonly dataService: DataService){}

    @Get()
    async getData():Promise<data[]>{
        return await this.dataService.findAll()
    }

    @Post('/add')
    async add(@Body() data:data){
        this.dataService.insertData(data);
    }
}
