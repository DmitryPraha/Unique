import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {Domain} from "../../domain/entities/domain.entity";

@Entity({name: 'tracks'})
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: ''})
    login: string;

    @Column({ type: 'varchar', default: ''})
    domain: string;

    @Column({ type: 'varchar', default: ''})
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToMany(() => Domain, (domains) => domains.tracks)
    domains: Domain[];
}
