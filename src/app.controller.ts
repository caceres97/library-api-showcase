import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheck() {
    return 'Service is running';
  }
}
