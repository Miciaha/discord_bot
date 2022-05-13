import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DiscordServerSeeder } from './discordserver.seeder'
import {  UserSeeder } from './user.seeder'

export class DatabaseSeeder extends Seeder {

  run(em: EntityManager): Promise<void> {
    return this.call(em, [
        UserSeeder,
        DiscordServerSeeder,
    ]);
  }
}