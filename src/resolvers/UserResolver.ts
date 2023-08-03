import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../schema/user/UserType";
import { UserCreateInput } from "../schema/user/UserInput";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async addUser(@Arg("data") data: UserCreateInput): Promise<User> {
    const userExist = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      throw new Error("User already exists");
    } else {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
        },
      });
      return user;
    }
  }

  @Query(() => [User])
  @Authorized()
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}
