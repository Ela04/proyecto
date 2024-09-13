import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiestasService } from './fiestas.service';
import { CreateFiestaDto } from './dto/create-fiesta.dto';
import { UpdateFiestaDto } from './dto/update-fiesta.dto';

@Controller('fiestas')
export class FiestasController {
  constructor(private readonly fiestasService: FiestasService) {}

  @Post()
  create(@Body() createFiestaDto: CreateFiestaDto) {
    return this.fiestasService.create(createFiestaDto);
  }

  @Get()
  findAll() {
    return this.fiestasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiestasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiestaDto: UpdateFiestaDto) {
    return this.fiestasService.update(+id, updateFiestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiestasService.remove(+id);
  }
}
