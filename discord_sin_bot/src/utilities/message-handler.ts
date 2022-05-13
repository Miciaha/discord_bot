import {Message, Collection} from 'discord.js'
import { Command } from '../commands/command';

export function handleMessage(message: Message, commands: Collection<string, Command>) {
    if (!message.content.startsWith("$") || message.author.bot) return;

    const withoutPrefix = message.content.replace("$", "");
    const split = withoutPrefix.split(" ");
    const commandName = split[0];
    const args = split.slice(1);

    if (!commands.has(commandName)) return;

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