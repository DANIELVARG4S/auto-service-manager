export class CreateUserDto {
  nombre!: string;
  apellido_paterno!: string;
  apellido_materno!: string;
  email!: string;
  password!: string;
  telefono!: string;
  readonly role_id: number = 2; // Asignar un valor predeterminado para el rol de usuario
}