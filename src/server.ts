import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as tq from "type-graphql";
import { Context, context } from "./context";
import { RideResolver } from "./ride/RideResolver";
import path from "path";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [RideResolver],
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
