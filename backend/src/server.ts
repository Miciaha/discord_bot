import { App } from "./app";
import {CommandController, ServerController, UserController, CommandTypeController} from "./controllers"

const app = new App(
    [
        new CommandController(),
        new ServerController(),
        new UserController(),
        new CommandTypeController(),
    ],
    3000
);

app.listen();
