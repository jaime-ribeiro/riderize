import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserRideRegistrationInput {
  @Field((type) => ID)
  ride_id: number;
  @Field((type) => ID)
  user_id: number;
  @Field()
  subscription_date: Date;
}
