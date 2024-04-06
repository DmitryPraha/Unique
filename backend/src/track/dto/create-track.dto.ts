import {IsArray, IsInt, IsString, isBoolean, IsBoolean} from 'class-validator';
import {Column} from "typeorm";


export class CreateTrackDto{
    @IsInt()
    id: number;

    @Column({ default: "ozon" })
    domain: string;

    @Column({ default: "amazon" })
    password: string;

    @Column({ default: true })
    isActive: boolean;

}
