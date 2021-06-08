import { Controller, Get, Param } from '@nestjs/common';
import { user } from 'src/models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get('/:username')
    async getUserByName(@Param('username') username: string):Promise<user>{
        return await this.userService.findOneUser(username);
    }
}
