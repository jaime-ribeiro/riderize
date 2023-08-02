import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { UserRide } from "./UserRideType";
import { Context } from "../context";
import { UserRideSubscriptionInput } from "./UserRideInput";

@Resolver(UserRide)
export class UserRideResolver {
  @Mutation(() => UserRide)
  @Authorized()
  async addSubscriptionUserRide(
    @Arg("data") data: UserRideSubscriptionInput,
    @Ctx() ctx: Context
  ): Promise<UserRide> {
    const userRide = await ctx.prisma.userRide.create({
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
    @Arg("user_id") user_id: number,
    @Ctx() ctx: Context
  ): Promise<UserRide[]> {
    return await ctx.prisma.userRide.findMany({
      where: {
        id: user_id,
      },
    });
  }
}
