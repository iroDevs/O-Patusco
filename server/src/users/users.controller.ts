import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserInput: CreateUserInput) {
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

  @Post('/login')
  async login(@Body() body: { email: string; senha: string }) {
    return this.usersService.login(body);
  }
}
