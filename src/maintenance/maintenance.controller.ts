import { Controller, Get } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  // Maintenance endpoints here

  @Get()
  async getAllMaintenance() {
    return this.maintenanceService.findAll();
  }
}
