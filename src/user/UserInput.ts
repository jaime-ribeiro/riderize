import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UserCreateInput {
  @Field()
  name: string;
  @Field()
  email: string;
}
