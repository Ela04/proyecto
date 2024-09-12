import { Injectable } from '@nestjs/common';

@Injectable()
//Marca la clase como un proveedor que puede ser inyectado en otros lugares (como en el controlador).

export class EjemploService {
    getDatosEjemplo(): string{
        //Este método simplemente devuelve un string con un mensaje estático.
        return 'Esta es ua respuesta estática desde el servicio Ejemplo';
    }
}
