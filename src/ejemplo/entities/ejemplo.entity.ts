import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ejemplo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}

