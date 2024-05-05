import {IsArray, IsInt, IsString, isBoolean, IsBoolean} from 'class-validator';
import {Column} from "typeorm";


export class CreateTrackDto{
    @IsInt()
    id: number;

    @IsString()
    login: string;

    @IsString()
    domain: string;

    @IsString()
    password: string;

    @Column({ default: true })
    isActive: boolean;

}
