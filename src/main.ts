import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoExceptionFilter } from './Exception-handler/mongo-exception-filter';
import { TypeORMExceptionFilter } from './Exception-handler/typeorm-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new MongoExceptionFilter());
  app.useGlobalFilters(new TypeORMExceptionFilter());
  const options = {
    origin: ['http://localhost:4200', 'https://dts-ui.vercel.app'],
    allowedHeaders: ['content-type'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);
  await app.listen(3000);
}
bootstrap();

//server

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as express from 'express';
// import { join } from 'path';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // CORS options
//   const corsOptions = {
//     origin: ['http://localhost:4200', 'https://dts-ui.vercel.app'],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   };

//   app.enableCors(corsOptions);

//   // Serve static files
//   app.use('/', express.static(join(__dirname, '..', 'public')));

//   await app.listen(3000);
// }

// bootstrap();
