import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle("Documentação com Swagger - Loja de Produtos")
    .setDescription(
      "Documentação referente ao trabalho da disciplina de Programação Web II, ministrada pelo professor Humberto"
    )
    .setVersion("1.0")
    .addTag("users")
    .addTag("produtos")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
