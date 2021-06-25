import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    manufacturer_id: string;

    @Column()
    manufacturer: string;

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

    @Column()
    category: string;
}