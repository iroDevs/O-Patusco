import { z } from 'zod';
import { PetType } from '@prisma/client';

export const CreatePet = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  type: z.nativeEnum(PetType), // agora garante os valores corretos
  age: z.number().int().min(0, 'Idade deve ser >= 0'),
  ownerId: z.number().int().min(1, 'ID do proprietário é obrigatório'),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const UpdatePet = z.object({
  name: z.string().min(1).optional(),
  type: z.nativeEnum(PetType).optional(),
  age: z.number().int().min(0).optional(),
  ownerId: z.number().int().min(1).optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export type CreatePetInput = z.infer<typeof CreatePet>;
export type UpdatePetInput = z.infer<typeof UpdatePet>;
