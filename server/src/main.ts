import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // STATIC ASSETS - servir arquivos estaticos (imagens, pdf, etc)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/', // exemplo -> http://localhost:3000/uploads/arquivo.png
  });

  await app.listen(3000);
}
bootstrap();
