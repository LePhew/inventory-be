import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(
        private _productService: ProductService
    ) { }

    @Get()
    async getAll() {
        return await this._productService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._productService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: ProductDTO) {
        return await this._productService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<ProductDTO>) {
        return await this._productService.update(id, data);
    }
}
