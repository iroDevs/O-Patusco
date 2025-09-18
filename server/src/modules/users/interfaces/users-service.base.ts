import { CreateUserInput } from '../dto/create-user-dto';
import { IUser } from './user.interface';

export abstract class UsersServiceBase {
  abstract createUser(createUserInput: CreateUserInput): Promise<IUser>;
  abstract getUsers(): Promise<IUser[]>;
  abstract getUserById(id: string): Promise<IUser | null>;
  abstract updateUser(
    id: string,
    updateUserInput: Partial<CreateUserInput>,
  ): Promise<IUser>;
  abstract login(credentials: {
    email: string;
    senha: string;
  }): Promise<{ token: string }>;
  abstract deleteUser(id: string): Promise<{ message: string }>;
}
