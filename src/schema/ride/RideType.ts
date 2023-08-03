import "reflect-metadata";
import { Field, ID, Int, ObjectType } from "type-graphql";
@ObjectType()
export class Ride {
  @Field((type) => ID)
  id: number;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
  @Field()
  name: string;
  @Field()
  start_date: Date;
  @Field()
  start_date_registration: Date;
  @Field()
  end_date_registration: Date;
  @Field((type) => String, { nullable: true })
  additional_information: string | null;
  @Field()
  start_place: string;
  @Field((type) => Int)
  participants_limit: number;
  @Field((type) => ID)
  created_by: number;
}
