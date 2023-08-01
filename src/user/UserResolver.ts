import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./UserType";
import { Context } from "../context";
import { UserCreateInput } from "./UserInput";

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async addUser(
    @Arg("data") data: UserCreateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const user = await ctx.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return user;
  }

  @Query(() => [User])
  async getUsers(@Ctx() ctx: Context): Promise<User[]> {
    return await ctx.prisma.user.findMany();
  }
}
