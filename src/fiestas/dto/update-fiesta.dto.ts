import { PartialType } from '@nestjs/mapped-types';
import { CreateFiestaDto } from './create-fiesta.dto';

export class UpdateFiestaDto extends PartialType(CreateFiestaDto) {}
