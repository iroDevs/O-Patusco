import { z } from 'zod';
//import { PetType } from '@prisma/client';

export const CreateClientSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  name: z.string().min(1, 'Nome é obrigatório'),
  address: z.string().min(1, 'Endereço é obrigatório'),
});

export const UpdateClientSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  name: z.string().min(1, 'Nome é obrigatório'),
  address: z.string().min(1, 'Endereço é obrigatório'),
});

export type CreateClientInput = z.infer<typeof CreateClientSchema>;
export type UpdateClientInput = z.infer<typeof UpdateClientSchema>;

/*

model Client {
  id          Int      @id @default(autoincrement())
  email       String   @unique
  phone       String?
  name        String
  address     String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  pets       Pet[]
  tasks      Task[]

  @@map("clients")
}
*/
