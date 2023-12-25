import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs, resolvers } from './schema';
import DotEnv from 'dotenv';

// DotEnv.config();

async function bootstrap() {

    const PORT = process.env.PORT || 1230;

    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    
    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send("its working");
    })

    httpServer.listen({ port: PORT });
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

bootstrap();