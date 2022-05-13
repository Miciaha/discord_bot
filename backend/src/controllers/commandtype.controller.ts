import * as express from 'express';
import { Controller } from '../interfaces/controller.interface';

export class CommandTypeController implements Controller {
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/commandTypes', this.getAllCommandTypes);
        this.router.get('/commandTypes/:id', this.getCommandTypes);

        this.router.post('/commandTypes', this.addCommandType);

        this.router.delete('/commandTypes/:id', this.removeCommandType);
    }

    getAllCommandTypes = (request: express.Request, response: express.Response) => {
        response.json({
            message: "Listing all command types"
        })
    }

    getCommandTypes = (request: express.Request, response: express.Response) => {
        var id = request.params['id'];
        response.json({
            message: "Retrieving command type with id " +  id
        })
    }

    addCommandType = (request: express.Request, response: express.Response) => {

    }

    removeCommandType = (request: express.Request, response: express.Response) => {

    }
}