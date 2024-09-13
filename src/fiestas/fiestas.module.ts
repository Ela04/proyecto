import { Module } from '@nestjs/common';
import { FiestasService } from './fiestas.service';
import { FiestasController } from './fiestas.controller';

@Module({
  controllers: [FiestasController],
  providers: [FiestasService],
})
export class FiestasModule {}
