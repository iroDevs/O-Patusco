import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadsModule } from './modules/uploads/upload.module';

@Module({
  imports: [PrismaModule, UsersModule, UploadsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
