import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { UserRide } from "../schema/userRide/UserRideType";
import { UserRideSubscriptionInput } from "../schema/userRide/UserRideInput";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
@Resolver(UserRide)
export class UserRideResolver {
  @Mutation(() => UserRide)
  @Authorized()
  async addSubscriptionUserRide(
    @Arg("data") data: UserRideSubscriptionInput
  ): Promise<UserRide> {
    const ride = await prisma.ride.findFirst({
      where: {
        id: data.ride_id,
      },
    });
    //If don't found ride_id
    if (!ride) {
      throw new Error("Ride ID not found");
    }

    if (data.subscription_date < ride.start_date_registration) {
      throw new Error(
        "Date subscription is greater than start date registration"
      );
    } else if (data.subscription_date > ride.end_date_registration) {
      throw new Error(
        "Date subscription is greater than end date registration"
      );
    }

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
