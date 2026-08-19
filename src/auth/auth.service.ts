import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerUser: RegisterUserDto) {
    return this.userRepository.insert({
      ...registerUser,
    });
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    if (!email || !password) {
      throw new BadRequestException("Email y password son obligatorios");
    }

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    if (user.password !== password) {
      throw new UnauthorizedException("Invalid password");
    }

    // 🔥 AQUÍ GENERAS EL TOKEN
    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      token,
    };
  }

  async validateUser(payload: { sub: number; email: string }) {
    return this.userRepository.findOne({ where: { id: payload.sub } });
  }
}