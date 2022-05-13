require('dotenv').config();
import * as fs from 'fs';
import {Client, Collection}  from 'discord.js';
import { Command } from './commands/command';
import { handleMessage } from './utilities/message-handler';

//Connect to Discord Client
const client = new Client();
const commands = new Collection<string,Command>();

//Reads in commands in commands folder
const commandFiles = fs
  .readdirSync(__dirname+"/commands/default")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/default/${file}`);

  commands.set(command.name, command);
}

client.once("ready", () => {
  //db.sinners.sync();
  //db.records.sync();
  console.log("Ready!");
});

client.login(process.env.BOT_TOKEN);

client.on("message", (message) => {
    handleMessage(message, commands);
});
