import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CourseCreateInput } from '../../database/prisma-client';
import { PrismaService } from '../prisma/prisma.service';

@Resolver('Course')
export class CoursesResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query()
  async getAllCourses() {
    return await this.prismaService.prisma.courses();
  }

  @Mutation()
  async createCourse(@Args('data') data: CourseCreateInput) {
    return await this.prismaService.prisma.createCourse(data);
  }
}
