import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDTO } from './role.dto';

@Controller('role')
export class RoleController {

    constructor(
        private _roleService: RoleService
    ) { }

    @Get()
    async getAll() {
        return await this._roleService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._roleService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: RoleDTO) {
        return await this._roleService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<RoleDTO>) {
        return await this._roleService.update(id, data);
    }

}
