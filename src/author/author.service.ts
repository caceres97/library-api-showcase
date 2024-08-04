import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({ data: createAuthorDto });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(id: string) {
    return this.prisma.genre.findFirstOrThrow({ where: { id } });
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.author.update({ where: { id }, data: updateAuthorDto });
  }

  remove(id: string) {
    return this.prisma.author.delete({ where: { id } });
  }
}
