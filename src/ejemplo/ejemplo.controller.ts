import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EjemploService } from './ejemplo.service'; 
import { CreateEjemploDto } from './dto/create-ejemplo.dto';
import { Ejemplo } from './entities/ejemplo.entity';


@Controller('ejemplo') 
//Ttodas las rutas dentro de este controlador comenzarán con /ejemplo

export class EjemploController {
    constructor(private readonly ejemploService: EjemploService) {}

    @Get()
    //Este método manejará solicitudes GET a la ruta base /ejemplo
    getEjemplo(): string{
        //Llama al servicio para obtener los datos y devolverlos en la respuesta.
        return this.ejemploService.getDatosEjemplo();
    }

    //Usando el DTO valida los datos enviados al crear un nuevo
    @Post()
    create(@Body() createEjemploDto: CreateEjemploDto): string {
        console.log(createEjemploDto);
        return `Creando: ${createEjemploDto.nombre}`;
    }
    //--------------------------------------------------------------------------------

    @Get()
    findAll(): Promise<Ejemplo[]> {
        return this.ejemploService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Ejemplo> {
        return this.ejemploService.findOne(+id);
    }
    /*
    @Post()
    create(@Body() ejemplo: Ejemplo): Promise<Ejemplo> {
        return this.ejemploService.create(ejemplo);
    }*/

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.ejemploService.remove(+id);
    }
}