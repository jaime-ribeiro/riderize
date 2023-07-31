import { Field, InputType } from "type-graphql";
import { Ride } from "./RideType";

@InputType()
export class RideInput implements Partial<Ride> {
  @Field()
  id: number;
  @Field()
  name: String;
  @Field()
  start_date: String;
  @Field()
  start_date_registration: Date;
  @Field()
  end_date_registration: Date;
  @Field()
  additional_information: String;
  @Field()
  start_place: String;
  @Field()
  participants_limit: Number;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
