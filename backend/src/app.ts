import http from 'http'
import express from 'express';
import * as bodyParser from 'body-parser';
require('dotenv').config();

import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { Controller } from './interfaces';
import { BotCommand, DiscordServer, User, CommandType} from './entities';

export const DBInstance = {} as {
    server: http.Server,
    orm: MikroORM,
    em: EntityManager,
    botCommandDb: EntityRepository<BotCommand>,
    commandTypeDb: EntityRepository<CommandType>,
    discordServerDb: EntityRepository<DiscordServer>,
    userDb: EntityRepository<User>
};

export class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.app = express();
        this.port = port;

        this.intializeDBConnection();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);

        this.app.get('/', (req, res) => res.json({ message: 'SinBot backend server is ready to serve!'}))
    }

    private async intializeDBConnection() {
        DBInstance.orm = await MikroORM.init<PostgreSqlDriver>({
            entities: ['./src/entities'],
            dbName: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            type: 'postgresql',
        });
        DBInstance.em = DBInstance.orm.em;
        DBInstance.botCommandDb = DBInstance.orm.em.getRepository(BotCommand);
        DBInstance.commandTypeDb = DBInstance.orm.em.getRepository(CommandType);
        DBInstance.discordServerDb = DBInstance.orm.em.getRepository(DiscordServer);
        DBInstance.userDb = DBInstance.orm.em.getRepository(User);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
       DBInstance.server =  this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}