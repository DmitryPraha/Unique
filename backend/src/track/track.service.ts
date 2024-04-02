import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {ObjectId, Repository} from "typeorm";
import {CreateTrackDto} from "./dto/create-track.dto";



@Injectable()

export class TrackService{

    constructor(
        @InjectRepository(Track)
        private tracksRepository: Repository<Track[]>,
    ) {}


    async create(dto: CreateTrackDto):Promise<Track[]>{
        const track =  this.tracksRepository.create();
        return track;
    }

    async getAll(count = 10 , offset = 0): Promise<Track[][]>{
        const tracks = this.tracksRepository.find();
        return tracks;
        //Возвращение всех записей
    }

    async getOne(id: ObjectId): Promise<Track[]>{
        return await this.tracksRepository.findOneById(id);
    }

    async delete(id: ObjectId){
        const track = this.tracksRepository.findOneById(id);
        const num = this.tracksRepository.delete(await track);
        return num;

    }
    //Функция поиска на сайте
    async search(query: string): Promise<Track[][]> {
        const tracks = await this.tracksRepository.find()
        return tracks;
    }

}
