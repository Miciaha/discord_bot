import { Message } from 'discord.js'
import * as fs from 'fs'

export abstract class Command {
    name: string;
    usage: string;
    aliases: string[];
    description: string;
    hasArguments: boolean;

    constructor(name: string, usage: string, aliases: string[], description: string, hasArgs: boolean) {
        this.name = name;
        this.usage = usage;
        this.aliases = aliases;
        this.description = description;
        this.hasArguments = hasArgs;
    }

    abstract execute(message: Message,args: string[]): Promise<Message>;
}

export class PlayAudioCommand extends Command {
    fileLocation: string;

    constructor(name: string, usage: string, aliases: string[], description: string, soundFile: string, hasArgs: boolean) {
        super(name, usage, aliases, description, hasArgs = false)
        this.fileLocation = soundFile;
    }

    async execute(message: Message, args: string[]): Promise<Message> {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            connection.play(
                fs.createReadStream(this.fileLocation)
            );

            setTimeout(function () {
                return connection.disconnect();
            }, 5000)

        } else {
            return message.reply("You need to join a voice channel first!");
        }
    }
}

export class RandomResponseCommand extends Command {
    responses: string[];
    numResponses: number;

    constructor(name: string, usage: string, aliases: string[], description: string, responses: string[], hasArgs: boolean) {
        super(name, usage, aliases, description, hasArgs = true)
        this.responses = responses;
        this.numResponses = responses.length;
    }
    execute(message: Message, args: string[]): Promise<Message> {

        var response = Math.floor(Math.random() * this.numResponses);

        return message.channel.send(this.responses[response]);
    }
}