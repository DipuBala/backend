import * as dotenv from 'dotenv';
dotenv.config();
import { coreConfig } from 'config/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './internal/swagger.init';
import { connectToDatabase } from './database/database.init';
async function bootstrap() {
  await connectToDatabase();
  const app = await NestFactory.create(AppModule);
  // Enable Swagger UI if not in production environment
  SwaggerConfig(app);
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
}
bootstrap();
