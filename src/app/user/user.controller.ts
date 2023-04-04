import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('Usuario')
export class UserController {
    constructor(private readonly userService: UserService ){}

    @Post()
    async createUser(@Body() user: UserDto){
        return await this.userService.createUser(user)
    }

    @Get()
    async allUser(){
        return await this.userService.allUser()
    }

    @Get(':idUser')
    async userById(@Param('idUser') idUser: string){
        return await this.userService.userById(idUser)
    }
}
