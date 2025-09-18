import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PetsServiceBase } from './interfaces/pet-service.base';
import { CreatePetInput, UpdatePetInput } from './dto/create-pet-dto';
import { IPet } from './interfaces/pet.interface';
import { PetType } from '@prisma/client';

@Injectable()
export class PetsService implements PetsServiceBase {
  constructor(readonly prisma: PrismaService) {}

  async createPet(createPetInput: CreatePetInput): Promise<IPet> {
    const { name, type, age, ownerId, image, description } = createPetInput;
    console.log(createPetInput);
    const existingPet = await this.prisma.pet.findUnique({
      where: { name, ownerId },
    });
    if (existingPet) {
      throw new ConflictException(
        'Já existe um pet com esse nome para esse dono',
      );
    }
    const typePet = type as PetType;
    const pet = await this.prisma.pet.create({
      data: {
        name,
        type: typePet,
        image: image || null,
        description: description || null,
        age,
        ownerId,
      },
    });
    return pet;
  }
  async getPets(): Promise<IPet[]> {
    return await this.prisma.pet.findMany({
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            address: true,
          },
        },
      },
    });
  }
  getPetById(id: string): Promise<IPet | null> {
    const idNumber = Number(id);
    return this.prisma.pet.findUnique({
      where: { id: idNumber },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            address: true,
          },
        },
      },
    });
  }
  getPetsByOwnerId(ownerId: string): Promise<IPet[]> {
    const ownerIdNumber = Number(ownerId);
    return this.prisma.pet.findMany({
      where: { ownerId: ownerIdNumber },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            address: true,
          },
        },
      },
    });
  }
  updatePet(id: string, updatePetInput: UpdatePetInput): Promise<IPet> {
    const idNumber = Number(id);
    return this.prisma.pet.update({
      where: { id: idNumber },
      data: updatePetInput,
    });
  }
}
