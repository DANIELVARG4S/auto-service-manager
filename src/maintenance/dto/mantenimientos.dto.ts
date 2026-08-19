import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';
import { IsNull } from 'typeorm';

export class MantenimientosDto {

    @IsString()
    @IsNotEmpty()
    id!: number;

    @IsNumber()
    @IsNotEmpty()
    vehiculo_Id!: number;

    @IsString()
    @IsNotEmpty()
    tipo_Mantenimiento!: string;

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