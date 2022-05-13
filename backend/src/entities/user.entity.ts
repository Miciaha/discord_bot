import { Entity, Property, ManyToOne } from '@mikro-orm/core';

import { DiscordServer } from './discordserver.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {

    @Property()
    discordId: string;

    @ManyToOne(() => DiscordServer, { nullable: true })
    discordServer!: DiscordServer;

    @Property()
    isAdmin: boolean;

    constructor(id: string, admin: boolean = false) {
        super();
        this.discordId = id;
        this.isAdmin = admin;
    }

}