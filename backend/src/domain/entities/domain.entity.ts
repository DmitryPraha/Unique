import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {Track} from "../../leak/entities/track.entity";

@Entity()
export class Domain {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: ''})
    domain: string;

    //@ManyToMany(() => Track)
    //@JoinTable()
    //tracks: Track[]
    //@ManyToMany(() => Track, (tracks) => tracks.attendees)
    //@JoinTable()
    //tracks: Track[];

}
