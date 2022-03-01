import { Module } from "@nestjs/common";
import { ItemModule } from "./api/product/item.module";

@Module({
  imports: [ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
