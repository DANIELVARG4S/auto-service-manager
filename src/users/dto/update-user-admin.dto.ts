import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { UpdateUserDto } from './update-user';


export class UpdateUserAdminDto extends UpdateUserDto {
  @IsNumber()
  @IsOptional()
  role?: number; // El Admin sí puede enviar un nuevo rol (ej: 'admin', 'moderator')
  
//   @IsOptional()
//   isActive?: boolean; // El Admin podría banear/desactivar la cuenta
}