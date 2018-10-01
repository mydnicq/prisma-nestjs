import { Injectable } from '@nestjs/common';
import { Prisma } from '../../database/prisma-client';

@Injectable()
export class PrismaService {
  public prisma: Prisma;

  constructor() {
    this.prisma = new Prisma({
      endpoint: 'http://localhost:4466',
      debug: true,
    });
  }
}
