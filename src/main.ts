import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  setInterval(() => {
    console.log('Status OK. Keep working...');
  }, 1500000);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
