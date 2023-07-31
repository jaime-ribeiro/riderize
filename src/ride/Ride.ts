import { Field, ObjectType } from "type-graphql";
@ObjectType()
class Ride {
  @Field()
  description: String;
  @Field()
  title: String;
  @Field()
  category: String;
}
export { Ride };
