import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

const baseDir = path.resolve('./');

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${baseDir}/${process.env.NODE_ENV}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
