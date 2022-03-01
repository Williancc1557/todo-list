import type { ChangeItemDto } from "../../api/product/change.dto";
import type { ItemEntity } from "./../entities/item";
import { Injectable } from "@nestjs/common";


const database: Array<ItemEntity> = [];

@Injectable()
export class DatabaseOrm {
    private static generateSequenceId() {

        const lastItem = database.slice(-1)[0]; // eslint-disable-line

        if (!lastItem) return 1; // eslint-disable-line

        const id = lastItem.id + 1 // eslint-disable-line

        return id;
    }

    public save(data: ItemEntity): void {
        const id = DatabaseOrm.generateSequenceId();

        database.push({
            ...data,
            id,
            finished: data.finished || false,
        });
    }

    public findAll(): Array<ItemEntity> {
        return database;
    }

    public findOne(id: number): ItemEntity {
        const item = database.find(i => i.id == id);

        return item;
    }

    public findOnlyNotChecked(): Array<ItemEntity> {
        const item = database.filter(i => i.finished);

        return item;
    }

    public findOnlyChecked(): Array<ItemEntity> {
        const item = database.filter(i => !i.finished);

        return item;
    }

    public delete(id: number): void {
        const itemPosition = database.findIndex(item => item.id == id);

        database.splice(itemPosition, 1); // eslint-disable-line
    }

    public change(itemBody: ChangeItemDto): ItemEntity {
        const index = database.findIndex(item => item.id == itemBody.id);

        const findItem = this.findOne(itemBody.id);
        
        database[index].name = itemBody.name || findItem.name;
        database[index].description = itemBody.description || findItem.description;

        if (itemBody.finished) {
            database[index].finished = itemBody.finished;
        } else {
            database[index].finished = false;
        }

        return database[index];
    }
}
