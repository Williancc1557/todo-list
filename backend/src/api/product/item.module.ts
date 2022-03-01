import { Module } from "@nestjs/common";
import { DatabaseOrm } from "src/database/repositories/database.service";
import { ItemRepository } from "src/database/repositories/product/product.repository";
import { ItemController } from "./item.controller";

@Module({
    controllers: [ItemController],
    providers: [ItemRepository, DatabaseOrm],
})
export class ItemModule {}
