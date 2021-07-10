import { Controller, Get, Post, Put, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
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
    async createProduct(@Body() data: ProductDTO) {
        let product = await this._productService.findAll({
            where: {
                sku: data.sku
            }
        });
        if (product.length > 0) {
            throw new HttpException('This product already exists', HttpStatus.FORBIDDEN);
        }
        return await this._productService.create(data);
    }

    @Put('update/:id')
    async updateProduct(@Param('id') id: string, @Body() data: Partial<ProductDTO>) {
        return await this._productService.update(id, data);
    }

    @Put('addtostock/:id')
    async addToStock(@Param('id') id: string, @Body('stock') amount: number) {
        return await this._productService.addToStock(id, amount)
    }

    @Put('removefromstock/:id')
    async removeFromStock(@Param('id') id: string, @Body('stock') amount: number) {
        return await this._productService.removeFromStock(id, amount)
    }

    @Post('assign/:id')
    async assignProduct(@Param('id') id: string, @Body('user_id') user_id: string) {

    }
}
