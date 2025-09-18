import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.email('Email inválido'),
  name: z.string().min(1, 'Nome é obrigatório'),
  phone: z.string().optional(),
  senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  role: z.enum(['MEDICO', 'RECEPCIONISTA', 'ATENDENTE', 'ADMIN'], {
    error: 'Role deve ser MEDICO, ATENDENTE, ADMIN ou RECEPCIONISTA',
  }),
});

export const UpdateUserSchema = z.object({
  email: z.string().email('Email inválido').optional(),
  name: z.string().min(1, 'Nome é obrigatório').optional(),
  phone: z.string().optional(),
  senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').optional(),
  role: z
    .enum(['MEDICO', 'RECEPCIONISTA', 'ATENDENTE', 'ADMIN'], {
      error: 'Role deve ser MEDICO, ATENDENTE, ADMIN ou RECEPCIONISTA',
    })
    .optional(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
