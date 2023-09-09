import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
@ApiTags('Usuario')
export class UserController {
    constructor(private readonly userService: UserService ){}

    @Post()
    @ApiOperation({ summary: 'Cadastrar usuario' })
    @ApiResponse({ status: 200, description: 'Usuario cadastrado com sucesso' })
    async createUser(@Body() user: UserDto){
        return await this.userService.createUser(user)
    }

    @Get()
    async allUser(){
        return await this.userService.allUser()
    }

    @Get(':idUser')
    @ApiOperation({ summary: 'Listar usuario pelo ID' })
    @ApiResponse({ status: 200, description: 'Usuario retornado com sucesso' })
    @ApiResponse({ status: 409, description: 'Usuario não encontrado' })
    async userById(@Param('idUser') idUser: string){
        return await this.userService.userById(idUser)
    }
}
