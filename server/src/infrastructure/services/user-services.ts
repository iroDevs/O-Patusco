export class UserServices {
  constructor(private usersRepository: IUsersRepository) {}

  async getUserById(id: number): Promise<OutputUserDto | null> {
    return this.usersRepository.findById(id)
  }

  async getAllUsers(): Promise<OutputUserDto[]> {
    return this.usersRepository.findAll()
  }

  async createUser(data: InputUserDto): Promise<OutputUserDto> {
    return this.usersRepository.create(data)
  }

  async updateUser(id: number, data: InputUserDto): Promise<OutputUserDto | null> {
    return this.usersRepository.update(id, data)
  }

  async deleteUser(id: number): Promise<void> {
    return this.usersRepository.delete(id)
  }
}
