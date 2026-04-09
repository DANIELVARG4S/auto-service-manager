import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    // console.log('register');
    // console.log(createUserDto);
    return this.userRepository.insert({
      nombre:createUserDto.nombre,
      apellido_paterno:createUserDto.apellido_paterno,
      apellido_materno:createUserDto.apellido_materno,
      email:createUserDto.email,
      password:createUserDto.password,
      telefono:createUserDto.telefono,
      rol_id:2,
    });
  }
}