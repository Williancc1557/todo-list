import { ChangeItemDto } from "./change.dto";
import { ItemRepository } from "./../../database/repositories/product/product.repository";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ItemEntity } from "src/database/entities/item";

@Controller()
export class ItemController {
    public constructor(
        private readonly productRepository: ItemRepository
    ) { }

    @Get("find")
    public getAllItems() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findAll(),
        };
    }

    @Get("find/:id")
    public findById(@Param("id") id: number) {
        return this.productRepository.findOne(id);
    }

    @Get("find/only/notcheckeds")
    public finOnlyNotCheckeds() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findOnlyNotChecked(),
        };
    }

    @Get("find/only/checkeds")
    public finOnlyCheckeds() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findOnlyChecked(),
        };
    }

    @Post("save")
    public save(@Body() product: ItemEntity) {
        return this.productRepository.save(product);
    }

    @Put("change")
    public change(@Body() data: ChangeItemDto) {
        return this.productRepository.change(data);
    }

    @Delete("delete/:id")
    public delete(@Param("id") id: number) {
        return this.productRepository.delete(id);
    }
}
