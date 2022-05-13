import { BotCommand, CommandType, DiscordServer, User } from "./entities";
import { Options } from '@mikro-orm/core';
require('dotenv').config();

const config: Options = {
    entities: [DiscordServer, User, CommandType, BotCommand],
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: 8000,
    password: process.env.DB_PASSWORD,
    seeder: {
        path: './src/db/seeders',
        defaultSeeder: 'DatabaseSeeder',
        glob: '!(*.d).{js,ts}',
        fileName: (className: string) => className,
    },
    type: "postgresql",
};

export default config;