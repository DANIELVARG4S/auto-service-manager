import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

export class RegisterUserDto {

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido_paterno!: string;

  @IsString()
  apellido_materno!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsString()
  telefono!: string;
}