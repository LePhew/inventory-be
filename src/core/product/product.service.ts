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

    async findAll(options?: any): Promise<any> {
        return await this._productRepository.find(options);
    }

    async findOne(id: string): Promise<any> {
        return await this._productRepository.findOne(id);
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

    async addToStock(id: string, amount: number): Promise<ProductEntity> {
        let product = await this._productRepository.findOne(id);
        product.stock += amount;
        await this._productRepository.save(product);
        return product;
    }

    async removeFromStock(id: string, amount: number): Promise<ProductEntity> {
        let product = await this._productRepository.findOne(id);
        product.stock -= amount;
        await this._productRepository.save(product);
        return product;
    }

    async assignProductToUser(id: string, user_id: string): Promise<ProductEntity> {
        let product = await this._productRepository.findOne(id);
        product.user_id = user_id;
        await this._productRepository.save(product);
        return product;
    }
}
