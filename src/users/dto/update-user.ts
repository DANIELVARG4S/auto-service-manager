import { IsString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class UpdateUserDto {
    
    @IsString()
    @IsOptional() // <-- Permite que no lo envíes
    nombre?: string; // <-- El signo '?' significa que puede ser undefined

    @IsString()    
    @IsOptional()
    apellido_paterno?: string;
    
    @IsString()
    @IsOptional()
    apellido_materno?: string;

    @IsEmail() // <-- Mejor usar IsEmail para validar formato
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    password?: string; // <-- Ahora sí, si no lo mandas, ¡no pasa nada!

    @IsNumber()
    @IsOptional()
    rol_id?: number; // <-- El Admin sí puede enviar un nuevo rol (ej: 'admin', 'moderator')
}