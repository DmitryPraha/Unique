import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Track {
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
