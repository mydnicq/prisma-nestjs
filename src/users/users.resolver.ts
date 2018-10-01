import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UserCreateInput } from '../../database/prisma-client';
import { PrismaService } from '../prisma/prisma.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query()
  async user(@Args('id') id: string) {
    return await this.prismaService.prisma.user({ id });
  }

  @Query()
  async getAllUsers() {
    return await this.prismaService.prisma.users();
  }

  @Mutation()
  async createUser(@Args('data') data: UserCreateInput) {
    return await this.prismaService.prisma.createUser(data);
  }

  @ResolveProperty()
  async courses(@Parent() user) {
    return await this.prismaService.prisma.user({ id: user.id }).courses();
  }
}
