import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { CompanyEntity } from '../../entities/company.entity';
import { CompanyDTO } from "./company.dto";

@Injectable()
export class CompanyService {

    constructor(
        @InjectRepository(CompanyEntity) private _companyRepository: Repository<CompanyEntity>
    ) { }

    async findAll(): Promise<any> {
        return await this._companyRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this._companyRepository.find({
            where: { id }
        })
    }

    async create(data: CompanyDTO): Promise<any> {
        let newCompany = this._companyRepository.create(data);
        await this._companyRepository.save(newCompany);
        return newCompany;
    }

    async update(id: string, data: Partial<CompanyDTO>): Promise<any> {
        await this._companyRepository.update(id, data);
        return await this._companyRepository.findOne(id);
    }


}
