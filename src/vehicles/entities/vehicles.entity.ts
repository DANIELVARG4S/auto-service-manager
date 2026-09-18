import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

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

    // Se omite el segundo argumento para que no dé error con user.id
    @ManyToOne(() => User)
    @JoinColumn({ name: 'usuario_id' })
    usuario!: User;
}