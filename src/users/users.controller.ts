import { Controller, Get, Param,Body} from '@nestjs/common';
import { user } from 'src/models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
}
