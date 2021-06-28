import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ManufacturerDTO } from './manufacturer.dto';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {

    constructor(
        private _manufacturerService: ManufacturerService
    ) { }

    @Get()
    async getAll() {
        return await this._manufacturerService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._manufacturerService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: ManufacturerDTO) {
        return await this._manufacturerService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<ManufacturerDTO>) {
        return await this._manufacturerService.update(id, data);
    }
}
