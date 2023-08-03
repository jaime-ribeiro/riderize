import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Ride } from "../schema/ride/RideType";
import { RideCreateInput } from "../schema/ride/RideInput";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
@Resolver(Ride)
export class RideResolver {
  @Mutation(() => Ride)
  @Authorized()
  async addRide(@Arg("data") data: RideCreateInput): Promise<Ride> {
    const ride = await prisma.ride.create({
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
  @Authorized()
  async myRides(@Arg("created_by") created_by: number): Promise<Ride[]> {
    return await prisma.ride.findMany({
      where: { created_by: created_by },
    });
  }

  @Query(() => [Ride])
  @Authorized()
  async rides(): Promise<Ride[]> {
    return await prisma.ride.findMany();
  }
}
