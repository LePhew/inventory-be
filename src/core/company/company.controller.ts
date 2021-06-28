import { Controller, Body, Param, Get, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDTO } from './company.dto';

@Controller('company')
export class CompanyController {

    constructor(
        private _companyService: CompanyService
    ) { }


    @Get()
    async getAll() {
        return await this._companyService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._companyService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: CompanyDTO) {
        return await this._companyService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<CompanyDTO>) {
        return await this._companyService.update(id, data);
    }

}
