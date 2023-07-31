import { Field, InputType, Int } from "type-graphql";

@InputType()
export class RideCreateInput {
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
}
