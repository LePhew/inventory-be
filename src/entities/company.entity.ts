import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('company')
export class CompanyEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

}