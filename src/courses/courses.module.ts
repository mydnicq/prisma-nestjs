import { Module } from '@nestjs/common';
import { CoursesResolver } from './courses.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CoursesResolver],
})
export class CoursesModule {}
