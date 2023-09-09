import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
        user: 'igo.vieira@live.com',
        pass: 'rosarosa123',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'igo.vieira@live.com',
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado com sucesso:', info.response);

    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      throw new Error('Erro ao enviar o e-mail');
    }
  }
}
