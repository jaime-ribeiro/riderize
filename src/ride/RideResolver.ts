import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Ride } from "./RideType";
import { RideCreateInput } from "./RideInput";
import { Context } from "../context";

@Resolver(Ride)
export class RideResolver {
  @Mutation(() => Ride)
  async addRide(
    @Arg("data") data: RideCreateInput,
    @Ctx() ctx: Context
  ): Promise<Ride> {
    const ride = await ctx.prisma.ride.create({
      data: {
        name: data.name,
        start_date: data.start_date,
        start_date_registration: data.start_date_registration,
        end_date_registration: data.end_date_registration,
        additional_information: data.additional_information,
        start_place: data.start_place,
        participants_limit: data.participants_limit,
      },
    });
    return ride;
  }

  @Query(() => [Ride])
  async getRides(@Ctx() ctx: Context): Promise<Ride[]> {
    return await ctx.prisma.ride.findMany();
  }
}
