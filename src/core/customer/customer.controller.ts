import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CustomerDTO } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {

    constructor(
        private _customerService: CustomerService
    ) { }

    @Get()
    async getAll() {
        return await this._customerService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._customerService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: CustomerDTO) {
        return await this._customerService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<CustomerDTO>) {
        return await this._customerService.update(id, data);
    }
}