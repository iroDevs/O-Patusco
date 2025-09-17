import { PetType } from '@prisma/client';

export interface IPet {
  id: number;
  name: string;
  type: PetType;
  age: number;
  ownerId: number;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}
