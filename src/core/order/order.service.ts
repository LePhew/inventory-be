import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { Repository } from "typeorm";
import { OrderDTO } from './order.dto';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderEntity) private _orderRepository: Repository<OrderEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._orderRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._orderRepository.find({
            where: { id }
        })
    }

    async create(data: OrderDTO): Promise<any> {
        let newProduct = this._orderRepository.create(data);
        await this._orderRepository.save(newProduct);
        return newProduct;
    }

    async update(id: string, data: Partial<OrderDTO>): Promise<any> {
        await this._orderRepository.update(id, data);
        return await this._orderRepository.findOne(id);
    }

}
