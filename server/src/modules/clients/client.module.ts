import { Module } from '@nestjs/common';
import { ClientsService } from './client.service';
import { ClientsController } from './client.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ClientsServiceBase } from './interfaces/client-service.base';

@Module({
  imports: [PrismaModule],
  providers: [
    ClientsService,
    { provide: ClientsServiceBase, useClass: ClientsService },
  ],
  controllers: [ClientsController],
})
export class ClientsModule {}
