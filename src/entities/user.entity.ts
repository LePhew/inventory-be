import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}