import { z } from 'zod';

export const CreatePet = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  type: z.string().min(1, 'Tipo é obrigatório'),
  age: z.number().min(0, 'Idade deve ser maior ou igual a 0'),
  ownerId: z.number().min(1, 'ID do proprietário é obrigatório'),
  description: z.string().optional(),
  image: z.string().optional(),
});

export type CreatePetInput = z.infer<typeof CreatePet>;
