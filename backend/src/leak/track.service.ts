import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {DeepPartial, DeleteResult, getRepository, ObjectId, Repository} from "typeorm";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";
import {Domain} from "../domain/entities/domain.entity";


@Injectable()

export class TrackService{


    constructor(
        @InjectRepository(Track)
        private tracksRepository: Repository<Track[]>,
        @InjectRepository(Track)
        private trackRepository: Repository<Track>,
        @InjectRepository(Domain)
        private domainRepository: Repository<Track>,
        private fileService: FileService
    ) {}

    //Добавление элемента
    async create(data: CreateTrackDto): Promise<Track>
    {

        const category1 = new Domain()
        category1.domain = "animals"
        await this.domainRepository.manager.save(category1)

        const category2 = new Domain()
        category2.domain = "zoo"
        await this.domainRepository.manager.save(category2)

        const question = new Track()
        question.domain = "dogs"
        question.login = "who let the dogs out?"
        question.attendees = [category1, category2]
        return this.trackRepository.manager.save(question)


       // const product = new Track();
        //product.domain = data.domain;
        //product.password = data.password;
        //return await this.trackRepository.save(product);
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
               .where("leak.domain = :domain", { domain: domain }).getMany();
           return user;
        }


    async filesFunction(dataFile, count = 0)
    {
        let path = '';
        dataFile.forEach(function(item) {
            path = item.originalname;
            //console.log(item.originalname);
        });
        const fs = require('fs');
        const data = fs.readFileSync('./static/files/'+path, 'utf8');
        console.log(data);
        try {
            //const data = fs.readFileSync(data, 'utf8');
            const lines = data.trim().split('\n');
            const entities = [];
            lines.forEach(line => {
                const [domain, login, password] = line.trim().split(' ');
                entities.push({domain,login,password});
            });
            console.log(entities.length)

            return this.trackRepository.save(entities);
        } catch (err) {
            console.error('Ошибка чтения файла:', err);
            return null;
        }
        const entities = fs.readFileSync('./static/files/'+path, 'utf8');

        if (entities) {
            console.log(entities);
        } else {
            console.log('Не удалось прочитать данные из файла.');
        }
    }
}
