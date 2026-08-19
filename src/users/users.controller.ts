import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Obtener todos
  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  // Obtener uno por ID
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  // Crear
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // Actualizar
 @Put(':id') // <-- Aquí cambiaste @Patch por @Put
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // Eliminar
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
