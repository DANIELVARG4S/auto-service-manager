import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {

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