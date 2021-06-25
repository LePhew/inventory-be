import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customer')
export class CustomerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    postal_code: number;

    @Column()
    city: string;

    @Column()
    country: string;
}