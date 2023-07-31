import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Ride } from "./RideType";
import { RideInput } from "./RideInput";
import { PrismaClient } from "@prisma/client";

@Resolver()
class RideResolver {
  @Mutation(() => Ride)
  async addRide(@Arg("rideInput") rideInput: RideInput) {
    const ride = await 
    return ride;
  }
  @Query(() => [Ride])
  async riders() {
    const riders = RideSchema.find();
    return riders;
  }
}
export { RideResolver };
