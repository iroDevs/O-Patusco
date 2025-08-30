import { prisma } from '../../database/PrismaClint'
import type { InputUserDto, OutputUserDto } from '../dtos/users-dto'
import type IUsersRepository from './interfaces/IUsersRepository'

export class UsersRepository implements IUsersRepository {
    async findById(id: number): Promise<OutputUserDto | null> {
        const user = await prisma.user.findUnique({
            where: { id: id },
        })
        if (!user) return null
        return this.mapToOutputDto(user)
    }

    async findAll(): Promise<OutputUserDto[]> {
        const users = await prisma.user.findMany()
        return users.map(this.mapToOutputDto)
    }

    async create(data: InputUserDto): Promise<OutputUserDto> {
        const user = await prisma.user.create({
            data: this.mapToPrismaInput(data),
        })
        return this.mapToOutputDto(user)
    }

    async update(id: string, data: InputUserDto): Promise<OutputUserDto | null> {
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: this.mapToPrismaInput(data),
        })
        if (!user) return null
        return this.mapToOutputDto(user)
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: { id: Number(id) },
        })
    }

    private mapToOutputDto(user: any): OutputUserDto {
        return {
            id: user.id,
            email: user.email,
            senha: user.senha,
            name: user.name,
            phone: user.phone,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }

    private mapToPrismaInput(data: InputUserDto): any {
        return {
            email: data.email,
            senha: data.senha,
            name: data.name,
            phone: data.phone,
            role: data.role,
        }
    }
}