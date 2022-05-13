require('dotenv').config();
import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DiscordServer } from '../../entities'

export class DiscordServerSeeder extends Seeder {

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    let server_id = null;
    let date = new Date(Date.now());

    if(process.env.DISCORD_SERVER_ID){
        server_id = process.env.DISCORD_SERVER_ID;
    }

    context.server = em.create(DiscordServer, {
      serverId: server_id,
      serverOwner: context.user,
      createdAt: date,
      updatedAt: date,
    });
  }
}