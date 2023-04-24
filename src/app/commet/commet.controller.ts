import { Controller, Post, Param, Body } from '@nestjs/common';
import { CommetService } from './commet.service';
import { CommetDto } from './commet.dto';

@Controller('commet')
export class CommetController {
    constructor(private readonly commentSetvice: CommetService ) {}

    @Post('producId/:productId/userId/:userId')
    async creatComment(
        @Param('productId') producId: string,
        @Param('userId') userId: string,
        @Body() commet: CommetDto) {
        
        return await this.commentSetvice.creatComment(producId, userId, commet)    

    };
}
