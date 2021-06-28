import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(
        private _categoryService: CategoryService
    ) { }

    @Get()
    async getAll() {
        return await this._categoryService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._categoryService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: CategoryDTO) {
        return await this._categoryService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<CategoryDTO>) {
        return await this._categoryService.update(id, data);
    }
}

