import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    const { numberOfCopies } = createBookDto;
    delete createBookDto.numberOfCopies;

    const copies = [];
    // We have to generate individual codes for the copies
    for (let index = 1; index <= numberOfCopies; index++) {
      copies.push({
        code: `${createBookDto.title
          .toLowerCase()
          .replace(' ', '-')}-v${index}`,
      });
    }

    // Creates books and copies
    return this.prisma.book.create({
      data: { ...createBookDto, BookCopy: { createMany: { data: copies } } },
    });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
