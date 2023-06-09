import { Controller, Get, Post, Body, HttpStatus, HttpCode, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.Dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() { email, password }: { email: string, password: string }){
        return this.authService.signIn({email, password})
    }

    @UseGuards(AuthGuard)    
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
 