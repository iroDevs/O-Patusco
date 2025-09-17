import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUsersService } from './interfaces/user-service.interface';
import { CreateUserInput } from './dto/create-user-dto';
import { IUser } from './interfaces/user.interface';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService implements IUsersService {
  constructor(readonly prisma: PrismaService) {}

  async createUser(createUserInput: CreateUserInput): Promise<IUser> {
    const { email, name, phone, role, senha } = createUserInput;
    const roleSelected = role as Role;
    // Não pode ter usuarios com mesmo email
    const existUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existUser) {
      throw new ConflictException('Email já cadastrado');
    }

    const passwordHash = await bcrypt.hash(senha, 10);

    return this.prisma.user.create({
      data: {
        email,
        name,
        phone,
        senha: passwordHash,
        role: roleSelected,
      },
    });
  }
  async getUsers(): Promise<IUser[]> {
    return await this.prisma.user.findMany();
  }
  async getUserById(id: string): Promise<IUser | null> {
    const userId = parseInt(id, 10);
    return await this.prisma.user.findUnique({
      where: { id: userId },
    });
  }
  async updateUser(
    id: string,
    updateUserInput: Partial<CreateUserInput>,
  ): Promise<IUser> {
    const userId = parseInt(id, 10);
    return await this.prisma.user.update({
      where: { id: userId },
      data: updateUserInput,
    });
  }
  async login(credentials: {
    email: string;
    senha: string;
  }): Promise<{ token: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
    });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(credentials.senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const token = 'token falso'; // Aqui você geraria um token JWT real
    return { token };
  }
}
