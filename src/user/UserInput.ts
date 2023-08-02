import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UserCreateInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
  @Field()
  @IsEmail()
  email: string;
}
