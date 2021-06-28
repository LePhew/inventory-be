import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ManufacturerEntity } from 'src/entities/manufacturer.entity';
import { Repository } from 'typeorm';
import { ManufacturerDTO } from './manufacturer.dto';

@Injectable()
export class ManufacturerService {

    constructor(
        @InjectRepository(ManufacturerEntity) private _manufacturerRepository: Repository<ManufacturerEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._manufacturerRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._manufacturerRepository.find({
            where: { id }
        })
    }

    async create(data: ManufacturerDTO): Promise<any> {
        let newManufacturer = this._manufacturerRepository.create(data);
        await this._manufacturerRepository.save(newManufacturer);
        return newManufacturer;
    }

    async update(id: string, data: Partial<ManufacturerDTO>): Promise<any> {
        await this._manufacturerRepository.update(id, data);
        return await this._manufacturerRepository.findOne(id);
    }

}
