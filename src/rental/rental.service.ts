import { Injectable } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookStatus, RentStatus } from '@prisma/client';
import * as moment from 'moment';

@Injectable()
export class RentalService {
  constructor(private prisma: PrismaService) {}

  create(createRentalDto: CreateRentalDto) {
    /*
      We have some rules:
      1. The copy has to be active
      2. The limit of the rented books is 5 at the same time
    */

    return this.prisma.$transaction(async (tx) => {
      const { bookCopyId, userId, rentDays } = createRentalDto;

      const userRentals = await tx.rental.count({
        where: { userId, status: RentStatus.RUNNING },
      });

      if (userRentals === 5) {
        throw new Error(`The student has reach the rental limit`);
      }

      const bookCopy = await tx.bookCopy.findFirst({
        where: { id: bookCopyId },
        include: { book: true },
      });

      if (bookCopy.status != BookStatus.ACTIVE) {
        throw new Error(
          `The current copy of book: ${bookCopy.book.title} is not available`,
        );
      }

      await tx.bookCopy.update({
        where: { id: bookCopyId },
        data: { status: BookStatus.RENTED },
      });

      // Validation passed, rent the book
      return tx.rental.create({
        data: {
          bookCopyId,
          userId,
          status: RentStatus.RUNNING,
          returnDate: moment().add(rentDays, 'days').toDate(),
        },
      });
    });
  }

  findAll() {
    return this.prisma.rental.findMany({
      include: { bookCopy: { include: { book: true } } },
    });
  }

  findOne(id: string) {
    return this.prisma.rental.findFirstOrThrow({
      include: { bookCopy: { include: { book: true } }, user: true },
      where: { id },
    });
  }

  returnBook(id: string, updateRentalDto: UpdateRentalDto) {
    /* 
      Another transaction to: 
      1. Change the status of the copy
      2. 
    */
  }

  remove(id: string) {
    return `This action removes a #${id} rental`;
  }
}
