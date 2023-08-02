import "reflect-metadata";
import path from "path";
import * as tq from "type-graphql";
import AuthenticationAssurance from "./middlewares/AuthenticationAssurance";
import express from "express";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { RideResolver } from "./ride/RideResolver";
import { UserRideResolver } from "./userRide/UserRideResolver";
import { UserResolver } from "./user/UserResolver";
import { AuthResolver } from "./resolvers/SessionResolver";
import { PrismaClient } from "@prisma/client";

const app = async () => {
  const prisma = new PrismaClient();
  const app = express();

  const schema = await tq.buildSchema({
    resolvers: [RideResolver, UserResolver, UserRideResolver, AuthResolver],
    authChecker: AuthenticationAssurance,
    validate: { forbidUnknownValues: false },
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }: ExpressContext) => {
      return { prisma, req, token: req?.headers?.authorization };
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(
      `Server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};
app();
