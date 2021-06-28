import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private _userRepository: Repository<UserEntity>
    ) { }


    async findAll(): Promise<any> {
        return await this._userRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._userRepository.find({
            where: { id }
        })
    }

    async create(data: UserDTO): Promise<any> {
        let newUser = this._userRepository.create(data);
        await this._userRepository.save(newUser);
        return newUser;
    }

    async update(id: string, data: Partial<UserDTO>): Promise<any> {
        await this._userRepository.update(id, data);
        return await this._userRepository.findOne(id);
    }

}
