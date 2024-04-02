import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    domain: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;
}
