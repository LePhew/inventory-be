import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private _userService: UserService
    ) { }


    @Get()
    async getAll() {
        return await this._userService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this._userService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() data: UserDTO) {
        return await this._userService.create(data);
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
        return await this._userService.update(id, data);
    }

}
