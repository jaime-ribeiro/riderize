import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
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
  @Authorized()
  async getUsers(@Ctx() ctx: Context): Promise<User[]> {
    return await ctx.prisma.user.findMany();
  }
}

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA5MjkwNDQsImV4cCI6MTY5MTUzMzg0NCwic3ViIjoiXCIxXCIifQ.ka8qO2_Czi1mj3RWrdJ6617lBzgdNPwXjH44C7x4-v4 */
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA5MjkwNDQsImV4cCI6MTY5MTUzMzg0NCwic3ViIjoiXCIxXCIifQ.ka8qO2_Czi1mj3RWrdJ6617lBzgdNPwXjH44C7x4-v4
