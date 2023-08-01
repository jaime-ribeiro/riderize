import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserRideRegistrationInput {
  @Field()
  ride_id: number;
  @Field()
  user_id: number;
  @Field()
  subscription_date: Date;
}
