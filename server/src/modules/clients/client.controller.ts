import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientsServiceBase } from './interfaces/client-service.base';
import { CreateClientInput, CreateClientSchema } from './dto/client-dto';
import { ZodPipe } from '../../pipes/zod.pipe';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsServiceBase) {}

  @Post()
  async createClient(
    @Body(new ZodPipe(CreateClientSchema)) createClientInput: CreateClientInput,
  ) {
    return this.clientsService.createClient(createClientInput);
  }
  @Get()
  async getClients() {
    return this.clientsService.getClients();
  }
  @Get(':id')
  async getClientById(@Param('id') id: string) {
    return this.clientsService.getClientById(id);
  }
  @Put(':id')
  async updateClient(
    @Param('id') id: string,
    @Body() updateClientInput: Partial<CreateClientInput>,
  ) {
    return this.clientsService.updateClient(id, updateClientInput);
  }

  @Delete(':id')
  async deleteClient(@Param('id') id: string) {
    return this.clientsService.deletedClient(id);
  }
}
