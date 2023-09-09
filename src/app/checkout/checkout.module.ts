import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Checkout, CheckoutSchema } from 'src/Mongo/Schemas/checkout.schema';
import { Cart, CartSchema } from 'src/Mongo/Schemas/cart.schema';
import {EmailModule} from '../email/email.module';
import { EmailService } from '../email/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Checkout.name, schema: CheckoutSchema },
      {name: Cart.name, schema: CartSchema}
    ]),
    EmailModule
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService, EmailService]
})
export class CheckoutModule {}
