export interface IClient {
  id: number;
  email: string;
  phone?: string;
  name: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}
