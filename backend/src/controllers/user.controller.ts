import * as express from 'express';
import { Controller } from '../interfaces/controller.interface';

export class UserController implements Controller {
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/users', this.getAllUsers);
        this.router.get('/users/:id', this.getUser);

        this.router.post('/users', this.addUser);

        this.router.delete('/users/:id', this.removeUser);
    }

    getAllUsers = (request: express.Request, response: express.Response) => {
        
    }

    getUser = (request: express.Request, response: express.Response) => {

    }

    addUser = (request: express.Request, response: express.Response) => {
        

    }

    removeUser = (request: express.Request, response: express.Response) => {

    }
}