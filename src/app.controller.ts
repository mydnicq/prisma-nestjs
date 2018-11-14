import { Get, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res): any {
    res.status(HttpStatus.OK).json([]);
  }
}
