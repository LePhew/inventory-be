import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategoryEntity } from "./category.entity";
import { ManufacturerEntity } from "./manufacturer.entity";

@Entity('product')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => ManufacturerEntity)
    @JoinColumn({ name: "manufacturer_id" })
    manufacturer: string;

    @ManyToOne(() => ProductCategoryEntity)
    @JoinColumn({ name: "category_id" })
    category: ProductCategoryEntity;

    @Column()
    sku: string;

    @Column()
    type: string;

    @Column()
    cost: number;

    @Column()
    selling_price: number;

    @Column()
    sold: number;

}