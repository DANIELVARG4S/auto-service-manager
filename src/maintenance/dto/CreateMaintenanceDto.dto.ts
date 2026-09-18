import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateMaintenanceDto {

    @IsString()
    @IsNotEmpty()
    id!: number;

    @IsNumber()
    @IsNotEmpty()
    vehiculo_Id!: number;

    @IsNumber()
    @IsNotEmpty()
    tipo_Mantenimiento_Id!: number;

    @IsNotEmpty()
    @IsDateString()
    fecha!: Date;

    @IsNotEmpty()
    @IsNumber()
    kilometraje!: number;

    @IsString()
    @IsNotEmpty()
    descripcion!: string;

    @IsNotEmpty()
    @IsNumber()
    costo!: number;

    @IsNotEmpty()
    proximo_servicio_km!: number;
    
    @IsNotEmpty()
    @IsDateString()
    proximo_servicio_fecha!: Date;
}