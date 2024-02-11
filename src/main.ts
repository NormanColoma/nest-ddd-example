import { NestFactory } from '@nestjs/core';
import { Container } from './container';

async function bootstrap() {
  const app = await NestFactory.create(Container);
  await app.listen(3000);
}
bootstrap();
