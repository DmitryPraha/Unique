import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';

@Entity({name: 'domain_leak'})
export class DomainLeak {
    @PrimaryGeneratedColumn()
    public id: number;
}
