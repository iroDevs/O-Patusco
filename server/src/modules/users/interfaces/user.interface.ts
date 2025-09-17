import { Role } from '@prisma/client';

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone?: string | null;
  role: Role;
  senha: string;
  createdAt: Date;
  updatedAt: Date;
}
