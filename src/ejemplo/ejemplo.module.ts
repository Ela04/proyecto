import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjemploService } from './ejemplo.service';
import { EjemploController } from './ejemplo.controller';
import { Ejemplo } from './entities/ejemplo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ejemplo])],
  providers: [EjemploService],
  controllers: [EjemploController],
})
export class EjemploModule {}
