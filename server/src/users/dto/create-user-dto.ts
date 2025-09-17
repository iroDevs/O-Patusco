import { z } from 'zod';
import { Role } from '@prisma/client';

export const CreateUserSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
  phone: z.string().optional(),
  senha: z.string().min(6),
  role: Role,
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
