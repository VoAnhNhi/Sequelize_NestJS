import {Controller, Post, UseGuards,Request,Body } from '@nestjs/common';
import {AuthService} from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        return this.authService.login(req.user);  
    }

    @Post('signup')
    async signup(@Body() req){
        return this.authService.signup(req.username,req.password); 
    }
}
