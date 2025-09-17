import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UsersServiceBase } from './interfaces/users-service.base';

@Module({
  imports: [PrismaModule],
  providers: [
    UsersService,
    { provide: UsersServiceBase, useClass: UsersService },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
