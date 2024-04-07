import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: ''})
    domain: string;

    @Column({ type: 'varchar', default: ''})
    password: string;

    @Column({ default: true })
    isActive: boolean;
}
