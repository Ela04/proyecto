import { Controller, Get } from '@nestjs/common';
import { EjemploService } from './ejemplo.service'; 


@Controller('ejemplo') 
//Ttodas las rutas dentro de este controlador comenzarán con /ejemplo

export class EjemploController {
    constructor(private readonly ejeService: EjemploService){}

    @Get()
    //Este método manejará solicitudes GET a la ruta base /ejemplo
    
    getEjemplo(): string{
        //Llama al servicio para obtener los datos y devolverlos en la respuesta.
        return this.ejeService.getDatosEjemplo();
    }
}
