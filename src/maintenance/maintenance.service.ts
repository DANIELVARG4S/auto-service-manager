import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mantenimiento } from './entities/mantenimientos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectRepository(Mantenimiento)
      private mantenimientosRepository: Repository<Mantenimiento>
  ) {}

  async findAll(): Promise<Mantenimiento[] | null>{
    return this.mantenimientosRepository.find();
  }

  async findOne(id: number): Promise<Mantenimiento | null> {
    return this.mantenimientosRepository.findOne({ where: { id } });
  }

  async create(mantenimientoData: Partial<Mantenimiento>): Promise<Mantenimiento> {
    const mantenimiento = this.mantenimientosRepository.create(mantenimientoData);
    return this.mantenimientosRepository.save(mantenimiento);
  }

  async update(id: number, updateData: Partial<Mantenimiento>): Promise<Mantenimiento> {
    await this.mantenimientosRepository.update(id, updateData);
    return this.findOne(id) as Promise<Mantenimiento>;
  }

  async remove(id: number): Promise<void> {
    await this.mantenimientosRepository.delete(id);
  }

//   select usuarios.id,usuarios.nombre,marca, tipo.nombre  
// from vehiculos
// inner join mantenimientos mant 
// on vehiculos.id = mant.vehiculo_id
// inner join usuarios 
// on usuarios.id  = vehiculos.usuario_id
// inner join tipos_mantenimiento tipo
// on mant.tipo_mantenimiento_id = tipo.id

  // Maintenance logic here
}
