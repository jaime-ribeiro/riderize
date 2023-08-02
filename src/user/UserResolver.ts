import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./UserType";
import { UserCreateInput } from "./UserInput";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async addUser(@Arg("data") data: UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return user;
  }

  @Query(() => [User])
  @Authorized()
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA5MjkwNDQsImV4cCI6MTY5MTUzMzg0NCwic3ViIjoiXCIxXCIifQ.ka8qO2_Czi1mj3RWrdJ6617lBzgdNPwXjH44C7x4-v4
