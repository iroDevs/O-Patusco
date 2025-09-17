import { CreatePetInput } from '../dto/create-pet-dto';
import { IPet } from './pet.interface';

export abstract class PetsServiceBase {
  abstract createPet(createPetInput: CreatePetInput): Promise<IPet>;
  abstract getPets(): Promise<IPet[]>;
  abstract getPetById(id: string): Promise<IPet | null>;
  abstract updatePet(
    id: string,
    updatePetInput: Partial<CreatePetInput>,
  ): Promise<IPet>;
  abstract login(credentials: {
    email: string;
    senha: string;
  }): Promise<{ token: string }>;
}
