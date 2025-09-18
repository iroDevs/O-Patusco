import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PetsServiceBase } from './interfaces/pet-service.base';
import { CreatePet, CreatePetInput } from './dto/create-pet-dto';
import { ZodPipe } from '../../pipes/zod.pipe';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsServiceBase) {}

  @Post()
  async createPet(
    @Body(new ZodPipe(CreatePet)) createPetInput: CreatePetInput,
  ) {
    return this.petsService.createPet(createPetInput);
  }

  @Get()
  async getPets() {
    return this.petsService.getPets();
  }

  @Get(':id')
  async getPetById(@Param('id') id: string) {
    return this.petsService.getPetById(id);
  }

  @Get('/owner/:ownerId')
  async getPetsByOwnerId(@Param('ownerId') ownerId: string) {
    return this.petsService.getPetsByOwnerId(ownerId);
  }

  @Put(':id')
  async updatePet(
    @Param('id') id: string,
    @Body() updatePetInput: Partial<CreatePetInput>,
  ) {
    return this.petsService.updatePet(id, updatePetInput);
  }
}
