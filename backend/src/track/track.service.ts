import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {DeepPartial, DeleteResult, ObjectId, Repository} from "typeorm";
import {CreateTrackDto} from "./dto/create-track.dto";
import * as domain from "domain";


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

    //Функция поиска на сайте
    //Пока не работает надо делать
       async search(query: string): Promise<Track[][]> {
       const tracks = await this.tracksRepository.find();
       return tracks;
    }

}
