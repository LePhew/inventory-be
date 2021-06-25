import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('manufacturer')
export class ManufacturerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ length: 100 })
    description: string;

}