import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadsModule } from './modules/uploads/upload.module';
import { PetsModule } from './modules/pets/pet.module';
import { ClientsModule } from './modules/clients/client.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UploadsModule,
    PetsModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
