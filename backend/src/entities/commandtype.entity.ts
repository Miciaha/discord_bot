import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne } from '@mikro-orm/core';

import { BotCommand } from './botcommand.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class CommandType extends BaseEntity {

    @Property()
    name: string;

    @OneToMany(() => BotCommand, b => b.commandType, { cascade: [Cascade.ALL], nullable:true })
    commands? = new Collection<BotCommand>(this);

    constructor(name: string) {
        super();
        this.name = name;
    }

}