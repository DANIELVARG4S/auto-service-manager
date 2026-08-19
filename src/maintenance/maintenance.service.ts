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

  // Maintenance logic here
}
