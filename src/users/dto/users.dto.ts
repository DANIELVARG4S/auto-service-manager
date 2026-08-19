import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UsersDto {

    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()    
    @IsNotEmpty()
    apellido_paterno!: string;
    
    @IsString()
    apellido_materno!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    telefono!: string;

    @IsNumber()
    @IsNotEmpty()
    rol_id!: number;
}