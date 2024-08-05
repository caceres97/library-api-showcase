import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashed = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: { ...createUserDto, password: hashed },
      select: { firstName: true, lastName: true, email: true, role: true },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        Rental: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findFirstOrThrow({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        Rental: true,
      },
    });
  }

  signIn(email: string) {
    return this.prisma.user.findFirstOrThrow({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.prisma.user.update({ where: { id }, data: { deleted: true } });
  }
}
