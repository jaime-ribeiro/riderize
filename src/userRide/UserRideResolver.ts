import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { UserRide } from "./UserRideType";
import { UserRideSubscriptionInput } from "./UserRideInput";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
@Resolver(UserRide)
export class UserRideResolver {
  @Mutation(() => UserRide)
  @Authorized()
  async addSubscriptionUserRide(
    @Arg("data") data: UserRideSubscriptionInput
  ): Promise<UserRide> {
    const userRide = await prisma.userRide.create({
      data: {
        ride_id: data.ride_id,
        user_id: data.user_id,
        subscription_date: data.subscription_date,
      },
    });
    return userRide;
  }

  @Query(() => [UserRide])
  @Authorized()
  async mySubscriptionRides(
    @Arg("user_id") user_id: number
  ): Promise<UserRide[]> {
    return await prisma.userRide.findMany({
      where: {
        id: user_id,
      },
    });
  }
}
