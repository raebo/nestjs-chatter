import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config, database, up } from 'migrate-mongo';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  private readonly dbMigrationConfig: Partial<config.Config> = {
    mongodb: {
      url: this.configService.getOrThrow<string>('MONGODB_URI'),
      databaseName: this.configService.getOrThrow<string>('MONGODB_DATABASE'),
      // options: {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // },
    },
    migrationsDir: `${__dirname}/migrations`,
    changelogCollectionName: 'changelog',
    migrationFileExtension: '.js',
    useFileHash: true,
  };

  async onModuleInit() {
    config.set(this.dbMigrationConfig);
    const { db, client } = await database.connect();
    await up(db, client);
  }
}
