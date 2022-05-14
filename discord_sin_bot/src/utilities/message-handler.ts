import {Message, Collection, Guild} from 'discord.js'
import { commands } from '../app';
import { Command, PlayAudioCommand, RandomResponseCommand } from '../commands/command';
import * as data from '../tempDatabase.json';

export function handleMessage(message: Message, commands: Collection<string, Command>) {
    if (!message.content.startsWith("$") || message.author.bot) return;

    const withoutPrefix = message.content.replace("$", "");
    const split = withoutPrefix.split(" ");
    const commandName = split[0];
    const args = split.slice(1);

    if (!commands.has(commandName)) {
        return message.channel.send(
            `That isn't a command in your server. Request it or make it, ${message.author}!`
        );
    }

    const command = commands.get(commandName);

    if (command.hasArguments && !args.length) {
        return message.channel.send(
            `You didn't use the command correctly. Try '$help <command name>' for help, ${message.author}!`
        );
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("There was an error trying to execute that command.");
        message.author.id;
    }
}

export function getServerCommands() {
    data.commands.forEach( x => {
      var command;
        if (x.type == "playAudio") {
            command = new PlayAudioCommand(x.name, x.usage, x.aliases, x.description, x.fileLocation, false);
        } else if (x.type == "responseGenerator"){
            command = new RandomResponseCommand(x.name, x.usage, x.aliases, x.description, x.phrases, false);
        }
    
        commands.set(command.name,command);
    });    
}