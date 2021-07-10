import { ProductState } from "src/enums/ProductState";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategoryEntity } from "./category.entity";
import { ManufacturerEntity } from "./manufacturer.entity";
import { UserEntity } from "./user.entity";

@Entity('product')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => ManufacturerEntity, { eager: true })
    @JoinColumn({ name: "manufacturer_id" })
    manufacturer: string;

    @Column()
    manufacturer_id: string;

    @ManyToOne(() => ProductCategoryEntity, category => category.products, { eager: true })
    @JoinColumn({ name: "category_id" })
    category: ProductCategoryEntity;

    @Column()
    category_id: string;

    @Column()
    sku: string;

    @Column({ nullable: true })
    cost: number;

    @Column({ nullable: true })
    selling_price: number;

    @Column()
    stock: number;

    @Column({ default: ProductState.Active })
    state: ProductState;

    @ManyToOne(() => UserEntity, user => user.products, { eager: true })
    @JoinColumn({ name: "user_id" })
    assigned_to: UserEntity;

    @Column({ nullable: true })
    user_id: string;

}