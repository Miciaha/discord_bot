import { Entity, Property, ManyToOne } from '@mikro-orm/core';

import { DiscordServer } from './discordserver.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {

    @Property()
    discordId: string;

    @ManyToOne(() => DiscordServer)
    discordServer: DiscordServer;

    @Property()
    isAdmin: boolean;

    constructor(id: string, server: DiscordServer, admin: boolean = false) {
        super();
        this.discordId = id;
        this.discordServer = server;
        this.isAdmin = admin;
    }

}