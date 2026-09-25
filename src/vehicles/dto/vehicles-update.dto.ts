import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVehicleDto {

    // El id del vehiculo que se va a actualizar, es obligatorio para identificar el vehiculo
    @IsNotEmpty() 
    @IsNumber()
    id!: number;

    @IsNotEmpty() 
    @IsNumber()
    usuario_id!: number; 

    @IsString()
    @IsNotEmpty()
    marca!: string;
    
    @IsString()
    @IsNotEmpty()
    modelo!: string;

    @IsNumber()
    @IsNotEmpty()
    anio!: number;

    @IsString()
    @IsNotEmpty()
    placa!: string;

    @IsNumber()  
    kilometraje!: number;

    @IsString()
    color!: string;
}