import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
  @Field()
  email: string;
  @Field()
  name: string;
}
