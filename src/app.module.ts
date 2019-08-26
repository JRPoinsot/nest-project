import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleController } from './sale/sale.controller';

@Module({
  imports: [],
  controllers: [AppController, SaleController],
  providers: [AppService],
})
export class AppModule {}
