import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class RideCreateInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsDate()
  start_date: Date;

  @Field()
  @IsDate()
  start_date_registration: Date;

  @Field()
  @IsDate()
  end_date_registration: Date;

  @Field((type) => String, { nullable: true })
  @IsOptional()
  @IsString()
  additional_information?: string | null;

  @Field()
  @IsString()
  start_place: string;

  @Field((type) => Int)
  @IsNumber()
  participants_limit: number;

  @Field((type) => Int)
  created_by: number;
}
