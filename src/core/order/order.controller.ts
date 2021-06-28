import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';
import { OrderDTO } from './order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(
        private _orderService: OrderService
    ) { }

    @Get()
    async getAll() {
        return await this._orderService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._orderService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: OrderDTO) {
        return await this._orderService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<OrderDTO>) {
        return await this._orderService.update(id, data);
    }
}
