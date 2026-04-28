import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginDto } from "./dto/login.dto";


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(registerUser: RegisterUserDto) {
    return this.userRepository.insert({
      ...registerUser,
    });
  }

  async login(loginDto: LoginDto) {
    // console.log('Login DTO:', loginDto); // Debugging line
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } }); 
    if (!user) {
      return { message: 'User not found' };
    } 
    if (user.password !== password) {
      return { message: 'Invalid password' };
    }
    return { message: 'Login successful' };
  }
}