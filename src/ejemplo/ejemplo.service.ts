import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejemplo } from './entities/ejemplo.entity';
import { Repository } from 'typeorm';
import { CreateEjemploDto } from './dto/create-ejemplo.dto';

@Injectable()
//Marca la clase como un proveedor que puede ser inyectado en otros lugares (como en el controlador).

export class EjemploService {
    getDatosEjemplo(): string{
        //Este método simplemente devuelve un string con un mensaje estático.
        return 'Esta es ua respuesta estática desde el servicio Ejemplo';
    }

    constructor(
        @InjectRepository(Ejemplo)
        private ejemploRepository: Repository<Ejemplo>,
    ) {}
    
      findAll(): Promise<Ejemplo[]> {
        return this.ejemploRepository.find();
      }
    
      findOne(id: number): Promise<Ejemplo> {
        return this.ejemploRepository.findOneBy({ id });
      }
    
      async create(createEjemploDto: CreateEjemploDto): Promise<Ejemplo> {
        const ejemplo = this.ejemploRepository.create(createEjemploDto);
        return this.ejemploRepository.save(ejemplo);
      }
    
      async remove(id: number): Promise<void> {
        await this.ejemploRepository.delete(id);
      }
}