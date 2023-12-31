import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
@ObjectType()
export class UserRide {
  @Field((type) => ID)
  id: number;
  @Field(() => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
  @Field((type) => ID)
  ride_id: number;
  @Field((type) => ID)
  user_id: number;
  @Field()
  subscription_date: Date;
}
