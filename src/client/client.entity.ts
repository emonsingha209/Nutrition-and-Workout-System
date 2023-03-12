
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;
}