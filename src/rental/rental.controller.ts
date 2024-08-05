import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalDto } from './dto/create-rental.dto';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(id);
  }

  @Patch(':id/return')
  returnBook(@Param('id') id: string) {
    return this.rentalService.returnBook(id);
  }
}
