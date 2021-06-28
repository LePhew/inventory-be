import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategoryEntity } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(ProductCategoryEntity) private _categoryRepository: Repository<ProductCategoryEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._categoryRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._categoryRepository.find({
            where: { id }
        })
    }

    async create(data: CategoryDTO): Promise<any> {
        let newCategory = this._categoryRepository.create(data);
        await this._categoryRepository.save(newCategory);
        return newCategory;
    }

    async update(id: string, data: Partial<CategoryDTO>): Promise<any> {
        await this._categoryRepository.update(id, data);
        return await this._categoryRepository.findOne(id);
    }

}
