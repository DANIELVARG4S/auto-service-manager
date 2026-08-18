import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/vehicles-create.dto';
import { UpdateVehicleDto } from './dto/vehicles-update.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // Vehicles endpoints here
  @Get()
  async getAllVehicles() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  async getVehicleById(@Param('id') id: number) {
    return this.vehiclesService.findOne(id);
  }

  @Post()
  async createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }


  @Put(':id')
  async updateVehicle(
    @Param('id') id: number,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(id, updateVehicleDto);
  } 

  @Delete(':id')
  async deleteVehicle(@Param('id') id: number) {
    return this.vehiclesService.remove(id);
  }
}
