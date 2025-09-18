import { Module } from '@nestjs/common';
import { PetsService } from './pet.service';
import { PetsController } from './pet.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { PetsServiceBase } from './interfaces/pet-service.base';

@Module({
  imports: [PrismaModule],
  providers: [PetsService, { provide: PetsServiceBase, useClass: PetsService }],
  controllers: [PetsController],
})
export class PetsModule {}
