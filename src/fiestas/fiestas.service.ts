import { Injectable } from '@nestjs/common';
import { CreateFiestaDto } from './dto/create-fiesta.dto';
import { UpdateFiestaDto } from './dto/update-fiesta.dto';

@Injectable()
export class FiestasService {
  create(createFiestaDto: CreateFiestaDto) {
    return 'This action adds a new fiesta';
  }

  findAll() {
    return `This action returns all fiestas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fiesta`;
  }

  update(id: number, updateFiestaDto: UpdateFiestaDto) {
    return `This action updates a #${id} fiesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} fiesta`;
  }
}
