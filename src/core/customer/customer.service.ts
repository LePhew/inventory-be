import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../../entities/customer.entity';
import { Repository } from "typeorm";
import { CustomerDTO } from './customer.dto';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity) private _customerRepository: Repository<CustomerEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._customerRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._customerRepository.find({
            where: { id }
        })
    }

    async create(data: CustomerDTO): Promise<any> {
        let newProduct = this._customerRepository.create(data);
        await this._customerRepository.save(newProduct);
        return newProduct;
    }

    async update(id: string, data: Partial<CustomerDTO>): Promise<any> {
        await this._customerRepository.update(id, data);
        return await this._customerRepository.findOne(id);
    }

}
