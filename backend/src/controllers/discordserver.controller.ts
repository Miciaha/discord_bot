import * as express from 'express';
import { Controller } from '../interfaces/controller.interface';

// Refers to discord server (more than happy to change the name here).

export class ServerController implements Controller {
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/servers', this.getAllServers);
        this.router.get('/servers/:id', this.getServer);

        this.router.post('/servers', this.addServer);

        this.router.delete('/servers/:id', this.removeServer);
    }

    getAllServers = (request: express.Request, response: express.Response) => {

    }

    getServer = (request: express.Request, response: express.Response) => {

    }

    addServer = (request: express.Request, response: express.Response) => {

    }

    removeServer = (request: express.Request, response: express.Response) => {

    }
}