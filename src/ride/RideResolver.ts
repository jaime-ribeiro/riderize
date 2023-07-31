import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
} from "type-graphql";
import { Ride } from "./RideType";
import { RideInput } from "./RideInput";
import { Prisma, PrismaClient } from "@prisma/client";
import { Context } from "vm";

@Resolver(Ride)
export class RideResolver {
  constructor(private prisma: PrismaClient) {}

  @Mutation((returns) => Ride)
  async addRide(
    @Arg("ride") rideInput: RideInput,
    @Ctx() ctx: Context
  ): Promise<any> {
    const ride = Object.assign(new Ride(), {
      id: rideInput.id,
      name: rideInput.name,
      start_date: rideInput.start_date,
      start_date_registration: rideInput.start_date_registration,
      end_date_registration: rideInput.end_date_registration,
      additional_information: rideInput.additional_information,
      start_place: rideInput.start_date,
      participants_limit: rideInput.participants_limit,
      createdAt: rideInput.createdAt,
      updatedAt: rideInput.updatedAt,
    });
    await ctx.prisma.ride.create({ ride });
    return ride;
  }
  /*   @Query(() => [Ride])
  async riders() {
    const riders = RideSchema.find();
    return riders;
  } */
}
