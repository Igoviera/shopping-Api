import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { Checkout } from 'src/Mongo/Schemas/checkout.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import {EmailService} from '../email/email.service';

@Injectable()
export class CheckoutService {

  constructor(
    @InjectModel(Checkout.name) private readonly checkoutModel: Model<Checkout>,
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    private readonly emailService: EmailService,
  ){}

  async create(cartId: string, createCheckoutDto: CreateCheckoutDto) {
    try {
      const cart = await this.cartModel.findById(cartId).exec();
  
      if (!cart) {
        throw new Error("Carrinho não encontrado");
      }
  
      const productIds = cart.product.map((productId) => productId.toString());
  
      const checkout = new this.checkoutModel({
        ...createCheckoutDto,
        products: productIds,
      });
  
      const savedCheckout = await checkout.save();

       // Envie um e-mail de confirmação
       await this.emailService.sendEmail(
        savedCheckout.email,
        'Pedido Confirmado',
        'Seu pedido foi realizado com sucesso!'
      );
  
      return savedCheckout;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao finalizar o checkout: " + error.message);
    }
  }
}
