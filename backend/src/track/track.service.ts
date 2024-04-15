import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {DeepPartial, DeleteResult, getRepository, ObjectId, Repository} from "typeorm";
import {CreateTrackDto} from "./dto/create-track.dto";
import * as domain from "domain";
import {count, from, Observable} from "rxjs";
import * as fs from "fs";
import * as readline from "readline";
import {toJson} from 'plain-text-data-to-json'
import {readFile} from "fs";


@Injectable()

export class TrackService{


    constructor(
        @InjectRepository(Track)
        private tracksRepository: Repository<Track[]>,
        @InjectRepository(Track)
        private trackRepository: Repository<Track>,
    ) {}

    //Добавление элемента
    async create(data: CreateTrackDto): Promise<Track>
    {
        const product = new Track();
        product.domain = data.domain;
        product.password = data.password;
        return await this.trackRepository.save(product);
    }


    //Возвращение всех записей
    async getAll(count = 10 , offset = 0): Promise<Track[][]>{
        const tracks = await this.tracksRepository.find();
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track[]>{
        return await this.tracksRepository.findOneById(id);
    }


    //Функция рабочая
    async delete(id: ObjectId): Promise<DeleteResult> {
        const track = await this.tracksRepository.findOneById(id);
        return await this.tracksRepository.delete(track);
     }


        async search(domain: string): Promise<Track[][]> {
           const user = this.tracksRepository
               .createQueryBuilder()
               .where("track.domain = :domain", { domain: domain }).getMany();
           return user;
        }


    async filesFunction() {
        const fs = require('fs');
        try {
            const data = fs.readFileSync('./src/static/files/pass_01.txt', 'utf8');
            const lines = data.trim().split('\n');
            const entities = [];

            lines.forEach(line => {
                const [domain, email, password] = line.trim().split(' ');
                entities.push({domain, password});
            });

            return this.trackRepository.save(entities);
            //return entities;
        } catch (err) {
            console.error('Ошибка чтения файла:', err);
            return null;
        }

        const entities = fs.readFileSync('./src/static/files/pass_01.txt', 'utf8');

        if (entities) {
            console.log(entities);
        } else {
            console.log('Не удалось прочитать данные из файла.');
        }
    }
}
