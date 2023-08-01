import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../context";
import Auth from "../schema/Auth";
import AuthConfig from "../config/auth";
import { sign } from "jsonwebtoken";

@Resolver(Auth)
export class AuthResolver {
  @Mutation((returns) => Auth)
  async signIn(
    @Arg("email") email: string,
    @Arg("name") name: string,
    @Ctx() ctx: Context
  ): Promise<any> {
    const user = await await ctx.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new Error("Incorrect email or name combination.");
    } else if (name === user.name) {
      const { secret, expiresIn } = AuthConfig.jwt;

      const token = sign({}, secret, {
        subject: `"${user.id}"`,
        expiresIn,
      });

      return {
        token,
        user,
      };
    } else {
      throw new Error("Incorrect email or name combination.");
    }
  }
}
