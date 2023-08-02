import { IsDate } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UserRideSubscriptionInput {
  @Field((type) => Int)
  ride_id: number;

  @Field((type) => Int)
  user_id: number;

  @Field()
  @IsDate()
  subscription_date: Date;
}
