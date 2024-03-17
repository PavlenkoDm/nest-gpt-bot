import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  setInterval(() => {
    return null;
  }, 1500000);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
