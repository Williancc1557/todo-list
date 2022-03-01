import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const LOCAL = 3000;
  const HOST = process.env.PORT;
  const PORT = HOST || LOCAL;

  await app.listen(PORT);
}

bootstrap();
