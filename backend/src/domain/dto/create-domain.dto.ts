import {IsArray, IsInt, IsString, isBoolean, IsBoolean} from 'class-validator';
import {Column} from "typeorm";


export class CreateDomainDto{
    @IsInt()
    id: number;

    @IsString()
    domain: string;

    trackId: any;
}
