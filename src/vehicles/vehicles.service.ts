import { Injectable } from '@nestjs/common';
import { Vehicles } from './entities/vehicles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVehicleDto } from './dto/vehicles-create.dto';
import { UpdateVehicleDto } from './dto/vehicles-update.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicles)
    private  vehiclesRepository: Repository<Vehicles>
  ) {}

  async findAll(): Promise<Vehicles[]> {
    return this.vehiclesRepository.find();
  }

  async findOne(id: number): Promise<Vehicles | null> {
    return this.vehiclesRepository.findOne({ where: { id } });
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicles> {
    const vehicle = this.vehiclesRepository.create(createVehicleDto);
    return this.vehiclesRepository.save(vehicle);
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicles> {
    await this.vehiclesRepository.update(id, updateVehicleDto);
    return this.findOne(id) as Promise<Vehicles>;
  }

  async remove(id: number) {
    await this.vehiclesRepository.delete(id);
  }
}
