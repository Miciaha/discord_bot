import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne, ManyToMany } from '@mikro-orm/core';

import { User } from './user.entity';
import { BotCommand } from './botcommand.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class DiscordServer extends BaseEntity {

    @Property()
    serverId: string;

    @ManyToOne(() => User)
    serverOwner: User

    @OneToMany(() => User, u => u.discordServer, {cascade: [Cascade.ALL]})
    users: Collection<User> = new Collection<User>(this);

    @OneToMany(() => BotCommand, b => b.discordServer, {cascade: [Cascade.ALL]}, )
    serverCommands: Collection<BotCommand> = new Collection<BotCommand>(this);

    constructor(id: string, owner: User) {
        super();
        this.serverId = id;
        this.serverOwner = owner;
    }

}