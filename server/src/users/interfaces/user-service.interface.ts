import { CreateUserInput } from '../dto/create-user-dto';
import { IUser } from './user.interface';

export interface IUsersService {
  createUser(createUserInput: CreateUserInput): Promise<IUser>;
  getUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUser | null>;
  updateUser(
    id: string,
    updateUserInput: Partial<CreateUserInput>,
  ): Promise<IUser>;
  login(credentials: {
    email: string;
    senha: string;
  }): Promise<{ token: string }>;
}
