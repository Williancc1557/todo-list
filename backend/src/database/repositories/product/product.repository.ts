import type { ChangeItemDto } from "../../../api/product/change.dto";
import { DatabaseOrm } from "src/database/repositories/database.service";
import type { ItemEntity } from "../../entities/item";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ItemRepository {

    public constructor(
        private readonly databaseOrm: DatabaseOrm
    ) {}

    public save(data: ItemEntity): void {
        return this.databaseOrm.save(data);
    }

    public findAll(): Array<ItemEntity> {
        return this.databaseOrm.findAll();
    }

    public findOne(id: number): ItemEntity {
        return this.databaseOrm.findOne(id);
    }

    public delete(id: number): void {
        return this.databaseOrm.delete(id);
    }

    public change(changeItemDto: ChangeItemDto): ItemEntity {
        return this.databaseOrm.change(changeItemDto);
    }

    public findOnlyNotChecked(): Array<ItemEntity> {
        return this.databaseOrm.findOnlyNotChecked();
    }

    public findOnlyChecked(): Array<ItemEntity> {
        return this.databaseOrm.findOnlyChecked();
    }
}
