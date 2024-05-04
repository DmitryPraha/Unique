import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {Track} from "../../leak/entities/track.entity";

@Entity({name: 'domains'})
export class Domain {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: ''})
    domain: string;

    @ManyToMany(() => Track, (tracks) => tracks.attendees)
    @JoinTable()
    tracks: Track[];

}
