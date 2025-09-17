import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersServiceBase } from './interfaces/users-service.base';
import { CreateUserInput, CreateUserSchema } from './dto/create-user-dto';
import { ZodPipe } from '../../pipes/zod.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServiceBase) {}

  @Post()
  async createUser(
    @Body(new ZodPipe(CreateUserSchema)) createUserInput: CreateUserInput,
  ) {
    return this.usersService.createUser(createUserInput);
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserInput: Partial<CreateUserInput>,
  ) {
    return this.usersService.updateUser(id, updateUserInput);
  }
  //quero que volte status 200 se der certo
  @Post('/login')
  @HttpCode(200)
  async login(@Body() body: { email: string; senha: string }) {
    return this.usersService.login(body);
  }
}
