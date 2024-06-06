import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS options
  const corsOptions = {
    origin: ['http://localhost:4200', 'https://digitalcard-gray.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  // Serve static files
  app.use('/', express.static(join(__dirname, '..', 'public')));

  await app.listen(5000);
}

bootstrap();
