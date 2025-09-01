import type { InputUserDto, OutputUserDto } from "../../dtos/users-dto"

export default interface IUsersRepository {
  findById(id: number): Promise<OutputUserDto | null>
  findAll(): Promise<OutputUserDto[]>
  create(data: InputUserDto): Promise<OutputUserDto>
  update(id: number, data: InputUserDto): Promise<OutputUserDto | null>
  delete(id: number): Promise<void>
}
