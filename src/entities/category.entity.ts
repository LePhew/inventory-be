import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_category')
export class ProductCategoryEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

}