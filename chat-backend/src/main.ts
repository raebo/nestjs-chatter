import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true }); //bufferLogs - use pino logs during startup of nestjs

  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));

  const configService = app.get(ConfigService);

  await app.listen(configService.getOrThrow('PORT'));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
