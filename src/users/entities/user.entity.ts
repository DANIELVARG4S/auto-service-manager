import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido_paterno!: string;

  @Column()
  apellido_materno!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  telefono!: string;

  @Column()
  rol_id!: number;
}