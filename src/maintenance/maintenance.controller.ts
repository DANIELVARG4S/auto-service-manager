import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { CreateMaintenanceDto } from './dto/CreateMaintenanceDto.dto';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  // Maintenance endpoints here

  @Get()
  async getAllMaintenance() {
    return this.maintenanceService.findAll();
  }

  @Get(':id')
  async getMaintenanceById(@Param('id') id: number) {
    return this.maintenanceService.findOne(id);
  }

  @Post()
  async createMaintenance(@Body() createMaintenanceDto: CreateMaintenanceDto) {
    return this.maintenanceService.create(createMaintenanceDto);
  }
}
