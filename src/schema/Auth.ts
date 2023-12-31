import { Field, ObjectType } from "type-graphql";
import { User } from "./user/UserType";

interface IAuth {
  token: string;
  user: User;
}

@ObjectType()
class Auth implements IAuth {
  @Field({ nullable: false })
  token: string;

  @Field((type) => User, { nullable: false })
  user: User;
}

export default Auth;
