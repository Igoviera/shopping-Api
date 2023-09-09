import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post(':cardId')
  create(
    @Param('cardId') cardId: string,
    @Body() createCheckoutDto: CreateCheckoutDto,
  ) {
    return this.checkoutService.create(cardId, createCheckoutDto);
  }
}
