import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

import { ProductDTO } from "./product.dto";
@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity) private _productRepository: Repository<ProductEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._productRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._productRepository.find({
            where: { id }
        })
    }

    async create(data: ProductDTO): Promise<any> {
        let newProduct = this._productRepository.create(data);
        await this._productRepository.save(newProduct);
        return newProduct;
    }

    async update(id: string, data: Partial<ProductDTO>): Promise<any> {
        await this._productRepository.update(id, data);
        return await this._productRepository.findOne(id);
    }


}
