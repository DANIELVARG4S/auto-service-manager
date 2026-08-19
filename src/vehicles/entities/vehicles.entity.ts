import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('vehiculos')
export class Vehicles {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    usuario_id!: number;

    @Column()
    marca!: string;

    @Column()
    modelo!: string;

    @Column()
    anio!: number;

    @Column()
    placa!: string;

    @Column()
    kilometraje!: number;

    @Column()
    color!: string;
    
}