require('dotenv').config();
import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../../entities'

export class UserSeeder extends Seeder {

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    var id = null;
    let server_id = null;

    let date = new Date(Date.now());

    if(process.env.DISCORD_ID){
        id = process.env.DISCORD_ID;
      }
    
    if(process.env.DISCORD_SERVER_ID){
        server_id = process.env.DISCORD_SERVER_ID;
    }
    // will get persisted automatically
    context.user = em.create(User, {
      discordId: id,
      isAdmin: true,
      discordServer: context.server,
      createdAt: date,
      updatedAt: date, 
    });
  }
}