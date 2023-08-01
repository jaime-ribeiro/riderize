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
        created_by: data.created_by,
      },
    });
    return ride;
  }

  @Query(() => [Ride])
  async myRides(
    @Arg("created_by") created_by: number,
    @Ctx() ctx: Context
  ): Promise<Ride[]> {
    return await ctx.prisma.ride.findMany({
      where: { created_by: created_by },
    });
  }
}
