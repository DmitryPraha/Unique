import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {Track} from "../../leak/entities/track.entity";

@Entity({name: 'domain_leak'})
export class DomainLeak {
    @PrimaryGeneratedColumn()
    id: number;
}
