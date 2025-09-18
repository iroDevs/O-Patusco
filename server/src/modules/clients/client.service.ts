import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ClientsServiceBase } from './interfaces/client-service.base';
import { CreateClientInput } from './dto/client-dto';
import { IClient } from './interfaces/client.interface';

@Injectable()
export class ClientsService implements ClientsServiceBase {
  constructor(readonly prisma: PrismaService) {}

  async deletedClient(id: string): Promise<{ message: string }> {
    const idNumber = Number(id);
    const client = await this.prisma.client.findUnique({
      where: { id: idNumber },
    });
    if (!client) {
      throw new ConflictException('Client not found');
    }
    await this.prisma.client.delete({
      where: { id: idNumber },
    });
    return { message: 'Client deleted successfully' };
  }

  async createClient(createClientInput: CreateClientInput): Promise<IClient> {
    const { address, email, name, phone } = createClientInput;
    const existClientWithEmail = await this.prisma.client.findUnique({
      where: { email },
    });

    if (existClientWithEmail) {
      throw new ConflictException('Email já cadastrado');
    }
    return await this.prisma.client.create({
      data: {
        address,
        email,
        name,
        phone,
      },
    });
  }
  getClients(): Promise<IClient[]> {
    // retorna clientes com seus pets
    return this.prisma.client.findMany({
      include: {
        pets: true,
      },
    });
  }
  getClientById(id: string): Promise<IClient | null> {
    const idNumber = Number(id);
    return this.prisma.client.findUnique({
      where: { id: idNumber },
      include: {
        pets: true,
      },
    });
  }
  updateClient(
    id: string,
    updateClientInput: Partial<CreateClientInput>,
  ): Promise<IClient> {
    const idNumber = Number(id);
    return this.prisma.client.update({
      where: { id: idNumber },
      data: updateClientInput,
    });
  }
  async deleteClient(id: string): Promise<{ success: boolean; msg?: string }> {
    const idNumber = Number(id);
    const client = await this.prisma.client.findUnique({
      where: { id: idNumber },
    });
    if (!client) {
      throw new ConflictException('Client not found');
    }
    await this.prisma.client.delete({
      where: { id: idNumber },
    });
    return { success: true, msg: 'Client deleted successfully' };
  }
}
