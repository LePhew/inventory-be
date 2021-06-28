import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('order')
export class OrderEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    customer_id: string;

    @Column()
    customer: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}