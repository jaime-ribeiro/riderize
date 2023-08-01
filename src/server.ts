import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "path";
import * as tq from "type-graphql";
import { RideResolver } from "./ride/RideResolver";
import { UserRideResolver } from "./userRide/UserRideResolver";
import { UserResolver } from "./user/UserResolver";
import { Context, context } from "./context";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [RideResolver, UserResolver, UserRideResolver],
    validate: { forbidUnknownValues: false },
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer<Context>({ schema });

  const { url } = await startStandaloneServer(server, {
    context: async () => context,
  });

  console.log(`
🚀 Server ready at: ${url}`);
};

app();
