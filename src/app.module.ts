import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { AuthorController } from './author/author.controller';
import { AuthorService } from './author/author.service';
import { GenreController } from './genre/genre.controller';
import { GenreService } from './genre/genre.service';
import { RentalController } from './rental/rental.controller';
import { RentalService } from './rental/rental.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [
    BookController,
    AuthorController,
    GenreController,
    RentalController,
  ],
  providers: [BookService, AuthorService, GenreService, RentalService],
})
export class AppModule {}
