import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mantenimientos')
export class Mantenimiento {
  // Define the properties of the Mantenimiento entity here
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  vehiculo_id!: number;

  @Column()
  tipo_mantenimiento!: string;

  @Column()
  fecha!: Date;

  @Column()
  kilometraje!: number;


  @Column()
  description!: string;


  @Column()
  costo!: number;

  @Column()
  proximo_servicio_km!: number;

  @Column()
  proximo_servicio_fecha!: Date;
}