import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/app/user/user.dto';
import { UserService } from 'src/app/user/user.service';
import { AuthDto } from './auth.Dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(user: {email: string, password: string}) {  
        const userAuth = await this.usersService.findOne(user)

        if(userAuth.password !== user.password){
            throw new UnauthorizedException('E-mail ou senha inválida');
        }
        const payload = {email: userAuth.email, sub: userAuth._id}

        return{
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
