import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookStatus } from '@prisma/client';

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

    // Creates book and copies
    return this.prisma.book.create({
      data: { ...createBookDto, bookCopy: { createMany: { data: copies } } },
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      select: {
        id: true,
        title: true,
        publicationYear: true,
        description: true,
        genre: true,
        author: true,
        bookCopy: true,
        _count: {
          select: { bookCopy: { where: { status: BookStatus.ACTIVE } } },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.book.findFirstOrThrow({
      select: {
        id: true,
        title: true,
        publicationYear: true,
        description: true,
        genre: true,
        author: true,
        bookCopy: true,
        _count: {
          select: { bookCopy: { where: { status: BookStatus.ACTIVE } } },
        },
        createdAt: true,
        updatedAt: true,
      },
      where: { id },
    });
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({ where: { id }, data: updateBookDto });
  }

  remove(id: string) {
    return Promise.all([
      this.prisma.bookCopy.updateMany({
        where: { bookId: id },
        data: { status: BookStatus.DELETED },
      }),
      this.prisma.book.update({ where: { id }, data: { deleted: true } }),
    ]);
  }
}
