import { CreateClientInput } from '../dto/client-dto';
import { IClient } from './client.interface';

export abstract class ClientsServiceBase {
  abstract createClient(createClientInput: CreateClientInput): Promise<IClient>;
  abstract getClients(): Promise<IClient[]>;
  abstract getClientById(id: string): Promise<IClient | null>;
  abstract updateClient(
    id: string,
    updateClientInput: Partial<CreateClientInput>,
  ): Promise<IClient>;
  abstract deleteClient(
    id: string,
  ): Promise<{ success: boolean; msg?: string }>;
  abstract deletedClient(id: string): Promise<{ message: string }>;
}
