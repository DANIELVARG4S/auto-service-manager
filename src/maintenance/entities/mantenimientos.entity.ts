import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mantenimientos')
export class Mantenimiento {
  // Define the properties of the Mantenimiento entity here
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  vehiculo_id!: number;

  @Column()
  tipo_mantenimiento_id!: number;

  @Column()
  fecha!: Date;

  @Column()
  kilometraje!: number;


  @Column()
  descripcion!: string;


  @Column()
  costo!: number;

  @Column()
  proximo_servicio_km!: number;

  @Column()
  proximo_servicio_fecha!: Date;
}

// select id,vehiculo_id,tipo_mantenimiento_id,fecha,kilometraje,descripcion,costo,proximo_servicio_km,proximo_servicio_fecha from mantenimientos
