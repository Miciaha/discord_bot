import * as express from 'express';
import { Controller } from '../interfaces/controller.interface';

export class CommandController implements Controller {
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/commands', this.getAllCommands);
        this.router.get('/commands/:id', this.getCommand);

        this.router.post('/commands', this.addCommand);

        this.router.delete('/commands/:id', this.removeCommand);
    }

    getAllCommands = (request: express.Request, response: express.Response) => {
        response.json({
            message: "Listing all commands"
        })
    }

    getCommand = (request: express.Request, response: express.Response) => {
        var id = request.params['id'];
        response.json({
            message: "Retrieving command with id " +  id
        })
    }

    addCommand = (request: express.Request, response: express.Response) => {

    }

    removeCommand = (request: express.Request, response: express.Response) => {

    }
}