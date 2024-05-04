import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {Track} from "../../leak/entities/track.entity";

@Entity({name: 'domains'})
export class Domain {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: ''})
    domain: string;

    @ManyToMany(() => Track, (tracks) => tracks.domains)
    @JoinTable(
        {
            name: 'domain_leak',
            joinColumn: {
                name: 'id_domain',
                referencedColumnName: 'id',
                foreignKeyConstraintName: 'domain_leak_id_domain',
            },
            inverseJoinColumn: {
                name: 'id_leak',
                referencedColumnName: 'id',
                foreignKeyConstraintName: 'domain_leak_id_leak',
            }
        }
    )
    tracks: Track[];

}
