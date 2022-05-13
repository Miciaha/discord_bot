import { Entity, Property, ManyToOne } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';
import { CommandType } from './commandtype.entity';
import { DiscordServer } from './discordserver.entity';

@Entity()
export class BotCommand extends BaseEntity {

    @Property()
    name: string;

    @Property()
    description: string;

    @Property({nullable: true})
    aliases?: string[];

    @ManyToOne(() => DiscordServer, {nullable: true})
    discordServer: DiscordServer;

    @ManyToOne(() => CommandType, {nullable: true})
    commandType: CommandType;

    constructor(name: string, description: string, server: DiscordServer, type: CommandType) {
        super();
        this.name = name;
        this.description = description;
        this.discordServer = server;
        this.commandType = type;
    }

}