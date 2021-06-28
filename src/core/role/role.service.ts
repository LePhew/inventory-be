import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/entities/role.entity';
import { Repository } from 'typeorm';
import { RoleDTO } from './role.dto';

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(RoleEntity) private _roleRepository: Repository<RoleEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._roleRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._roleRepository.find({
            where: { id }
        })
    }

    async create(data: RoleDTO): Promise<any> {
        let newRole = this._roleRepository.create(data);
        await this._roleRepository.save(newRole);
        return newRole;
    }

    async update(id: string, data: Partial<RoleDTO>): Promise<any> {
        await this._roleRepository.update(id, data);
        return await this._roleRepository.findOne(id);
    }
}

