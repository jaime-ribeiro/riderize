import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Ride } from "./Ride";

@InputType()
class RideInput {
  @Field()
  description: String;
  @Field()
  title: String;
  @Field()
  category: String;
}

@Resolver()
class RideResolver {
  @Mutation(() => Ride)
  async addRide(@Arg("rideInput") rideInput: RideInput) {
    const ride = await RideSchema.create(rideInput);
    return ride;
  }
  @Query(() => [Ride])
  async riders() {
    const riders = RideSchema.find();
    return riders;
  }
}
export { RideResolver };
