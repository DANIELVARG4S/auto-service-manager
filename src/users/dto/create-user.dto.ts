import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
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

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsNumber()
    @IsNotEmpty()
    role!: number;
}