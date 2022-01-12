import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    full_name: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    company_id: string;

    @Column({ nullable: true })
    company: string;

    @Column({ unique: true })
    user_name: string;

    @Column()
    password: string;

    @OneToMany(() => ProductEntity, product => product.category)
    @JoinColumn()
    products: ProductEntity[];
}