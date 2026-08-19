import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVehicleDto {

    @IsNotEmpty() 
   @IsOptional()
    usuarioId!: number; 

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