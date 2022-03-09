import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
  Parent,
  Context,
  Info,
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
  async getAllUsers(@Context() ctx, @Info() info) {
    const { value, loc } = info.operation.name;
    const { body } = loc.source;

    const fragment = `
    fragment A on B{
      id name coursesd {
        title
      }
    }`;

    // const fragment = body
    //   .replace(`query ${value}`, 'fragment A on B')
    //   .replace(`${value} {`, '')
    //   .replace(/}([^}]*)$/, '')
    //   .trim();

    return await this.prismaService.prisma.users().$fragment(fragment);
  }

  @Mutation()
  async createUser(@Args('data') data: UserCreateInput) {
    return await this.prismaService.prisma.createUser(data);
  }

  // @ResolveProperty()
  // async courses(@Parent() user, @Info() info) {
  //   return await this.prismaService.prisma.user({ id: user.id }).courses();
  // }
}
